import Card1 from './card1.ts';

class CardDeck {

        public deck:Card1[] = [];

static suitsObj:{diams:string, hearts:string, clubs:string, spades:string} = {
            diams: '♦',
            hearts: '♥',
            clubs: '♣',
            spades: '♠'
        };
    static rankArr: string[] = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    public getDeck =() =>{
        for (let i = 0; i < CardDeck.rankArr.length; i++){
                const newItem = new Card1(CardDeck.rankArr[i], CardDeck.suitsObj.diams);
                this.deck.push(newItem);
        }
        for (let i = 0; i < CardDeck.rankArr.length; i++){
                const newItem = new Card1(CardDeck.rankArr[i], CardDeck.suitsObj.hearts);
            this.deck.push(newItem);
        }
        for (let i = 0; i < CardDeck.rankArr.length; i++){
                const newItem = new Card1(CardDeck.rankArr[i], CardDeck.suitsObj.clubs);
            this.deck.push(newItem);
        }
        for (let i = 0; i < CardDeck.rankArr.length; i++){
                const newItem = new Card1(CardDeck.rankArr[i], CardDeck.suitsObj.spades);
            this.deck.push(newItem);
        }
    };

    public getCard = () => {
        const index:number = Math.floor(Math.random() * (this.deck.length));
        return this.deck.splice(index,1);

};
    public getCards = (howMany:number) => {
        const cardArray = [];
        for (let i = 1; i <= howMany; i++){
            cardArray.push(this.getCard());
        }
        return cardArray;
};

}

   export default CardDeck;