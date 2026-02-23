import { useSyncExternalStore, useDebugValue, useCallback } from "react"
import type { StoreApi } from "../core"

export function useStore<T>(store: T): T;
export function useStore<T, U>(store: StoreApi<T>, selector: (state: T) => U): U;
export function useStore<T, U>(store: StoreApi<T>, selector?: (state: T) => U) {
    const slice = useSyncExternalStore(store.subscribe, useCallback(() => {
        const state = store.getState();
        return selector ? selector(state) : state;
    }, [store, selector]),);
    
    useDebugValue(slice);
    
    return slice;
}