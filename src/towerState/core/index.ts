type Listener<T> = (state: T, prev: T) => void

export type StoreApi<T> = {
    getState: () => T,
    setState: (replace: Partial<T> | ((prev: T) => Partial<T>)) => void,
    getInitialState: () => T,
    subscribe: (listener: Listener<T>) => () => void
}

type StateCreator<T> = T | (() => T);

export const createStore = <T extends object>(create: StateCreator<T>): StoreApi<T>  => {
    let state = typeof create === "function" ? create() : create;
    const initialState = { ...state };
    const listeners: Set<Listener<T>> = new Set();

    const getState = () => state;
    
    const setState = (replace: Partial<T> | ((prev: T) => Partial<T>)) => {
        const newState = typeof replace === 'function' ? replace(state) : replace;

        if (Object.is(state, newState)) {
            return;
        }

        const prevState = state;
        state = Object.assign({}, state, newState);
        listeners.forEach(listener => listener(state, prevState));
    }

    const getInitialState = () => initialState;

    const subscribe = (listener: Listener<T>) => {
        listeners.add(listener);

        return () => listeners.delete(listener)
    }

    return {
        getState,
        setState,
        getInitialState,
        subscribe
    }
}