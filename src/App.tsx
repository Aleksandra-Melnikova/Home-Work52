
import './App.css';
import Card from './components/card/card.tsx';
import './cards.css';
import CardDeck from './lib/cardDeck.ts';
import Card1 from './lib/card1.ts';
import {useState} from 'react';
import PokerHand from './lib/PokerHand.ts';

const cards = new CardDeck();
cards.getDeck();

const App = () => {
    const [hand, setHand] = useState<Card1[][]>([]);
    const withdrawCards = () =>{
        const arr = cards.getCards(5);
        setHand(arr);
    };

        return (
            <>
                <p>Card count: {cards.deck.length}</p>
                {hand.length === 0 ? <p>Result of round: </p> :
                   <p>Result of round:{new PokerHand(hand).getOutcome()}</p>}
                {cards.deck.length >= 5 ?
                    <button onClick={withdrawCards} className='btn' type="button">Get 5 cards</button> : null}
                {hand.length > 0 && cards.deck.length >= 5 ?
                    <div className="playingCards faceImages">
                    <Card rankSymbol={hand[0][0].rank} suit={hand[0][0].suit}/>
                    <Card rankSymbol={hand[1][0].rank} suit={hand[1][0].suit}/>
                    <Card rankSymbol={hand[2][0].rank} suit={hand[2][0].suit}/>
                    <Card rankSymbol={hand[3][0].rank} suit={hand[3][0].suit}/>
                    <Card rankSymbol={hand[4][0].rank} suit={hand[4][0].suit}/>
                </div> : <p>No cards</p>}
            </>
        );
};

export default App;
