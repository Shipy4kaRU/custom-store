import { cardsStore } from "../store"
import { useStore } from "../towerState/react"

type CardProps = {
    id: number
}

export const Card = ({id}: CardProps) => {
    const cardData = useStore(cardsStore, state => state.cards[id]);

    const handlePrice = () => {
        cardsStore.setState(prev => ({cards: {...prev.cards, [id]: {...prev.cards[id], price: prev.cards[id].price + 100}}}))
    };

    console.log("i am rerendered too");

    return <div><p>CARD TITLE: {cardData.title}</p><p>CARD PRICE: {cardData.price}</p><button onClick={handlePrice}>ADD PRICE</button></div>
}   