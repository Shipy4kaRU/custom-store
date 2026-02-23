import { useSyncExternalStore, useDebugValue, useCallback } from "react"
import type { StoreApi } from "../core"

export function useStore<T>(store: T): T;
export function useStore<T, U>(store: StoreApi<T>, selector: (state: T) => U): U;
export function useStore<T, U>(store: StoreApi<T>, selector?: (state: T) => U) {
    const getSnapshot = useCallback(() => {
        const state = store.getState();
        return selector ? selector(state) : state;
    }, [store, selector]);

    const subscribe = (onStoreChanged: () => void) => {
        return store.subscribe((state, prevState) => {
            const prevSlice = selector ? selector(prevState) : prevState;
            const newSlice = selector ? selector(state) : state;

            if (!Object.is(prevSlice, newSlice)) {
                console.log('[SUBSCRIBE] notify React')
                onStoreChanged();
            }
        })
    }

    const slice = useSyncExternalStore(subscribe, getSnapshot);
    
    useDebugValue(slice);
    
    return slice;
}