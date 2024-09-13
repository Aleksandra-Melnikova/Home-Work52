
import './App.css';
import Card from './components/card/card.tsx';
import './cards.css';
import CardDeck from './lib/cardDeck.ts';

const App = () => {
  const suitsObj:{diams:string, hearts:string, clubs:string, spades:string} = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠'
  };

  const rankArr: string[] = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

  return (
      <>
        <div className="playingCards faceImages">
          <Card rankSymbol={rankArr[10]} suit={suitsObj.clubs} style={'clubs'}/>
        </div>
      </>
  );
};
const cards = new CardDeck();
cards.getDeck();
cards.getCard();
cards.Cons();
cards.getCards(5);
cards.Cons();
export default App;
