import './App.css'
import { fetchData } from "./fetchData";
import {useEffect, useState} from "react";
import { CardsGrid } from './Cards/CardsGrid';
import { cardsStore } from './store';


function App() {
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    const getCards = async () => {
        const data = await fetchData();
        const cardsData = {
            ids: Object.keys(data),
            cards: data
        }
        cardsStore.setState(cardsData);
    };

    console.log("i am too")

    getCards();
}, []);

  return (
    <>
      <button onClick={() => setIsRender(prev => !prev)}>UNMOUT ME</button>
      {isRender && <CardsGrid />}
    </>
  )
}

export default App
