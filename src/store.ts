import { createStore } from "./towerState/core";

// type CardsType = Record<number, > - ПОЧЕМУ ЭТОТ ТИП ПРОХОДИТ???

type CardsType = {
    ids: string[],
    cards: Record<number, {title: string, price: string}>
}

export const cardsStore = createStore<CardsType>({ids: [], cards: {}});