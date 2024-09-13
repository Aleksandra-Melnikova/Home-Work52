
import './App.css'
import Card from "./components/card/card.tsx";
import './cards.css'

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
<Card rankSymbol={rankArr[5]} suit = {suitsObj.clubs}/>
    </>
  )
};

export default App
