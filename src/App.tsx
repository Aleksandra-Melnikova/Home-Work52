
import './App.css';
import Card from './components/card/card.tsx';
import './cards.css';
import CardDeck from './lib/cardDeck.ts';
import Card1 from './lib/card1.ts';
import {useState} from 'react';

const App = () => {


    const [hand, setHand] = useState<Card1[][]>([]);
    const withdrawCards = () =>{
        const cards = new CardDeck();
        cards.getDeck();
        const arr = cards.getCards(5);
        setHand(arr);
        console.log(arr);};

        return (
            <>
                <button onClick={withdrawCards} className='btn' type="button">Раздать карты</button>
                {hand.length > 0 ? <div className="playingCards faceImages">
                    <Card rankSymbol={hand[0][0].rank} suit={hand[0][0].suit}/>
                    <Card rankSymbol={hand[1][0].rank} suit={hand[1][0].suit}/>
                    <Card rankSymbol={hand[2][0].rank} suit={hand[2][0].suit}/>
                    <Card rankSymbol={hand[3][0].rank} suit={hand[3][0].suit}/>
                    <Card rankSymbol={hand[4][0].rank} suit={hand[4][0].suit}/>
                </div>:null}

            </>
        );


};

export default App;
