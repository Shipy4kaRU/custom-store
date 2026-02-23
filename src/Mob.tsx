import { useStore } from "./towerState/react";
import {countStore} from "./store";
import {memo} from "react";

export const Mob = memo(() => {
    const count = useStore(countStore, state => state.mobCount);

    return (
        <div>
            <h1>Mob Count is {count}</h1>
            <button onClick={() => countStore.setState(prev => ({mobCount: prev.mobCount + 2}))}>PLUS 2</button>
        </div>
    )
})