import { cardsStore } from "../store";
import { useStore } from "../towerState/react";
import { Card } from "./Card";

export const CardsGrid = () => {
    const cardIds = useStore(cardsStore, state => state.ids);

    return <><p>CARDS GRID: </p>{cardIds.map(id => <div key={id}><p>CARD ID: {id}</p><Card id={+id}/></div>)}</>
}