import Card1 from './card1.ts';


class PokerHand {
    constructor(public arr: Card1[][]) {
        this.arr = arr;
    }
     static arrayOfRank: string[] = ['1','1' ,'1', '0','0'];
    static arrayOfSuits:string[] = ['0','0','0','0','1'];

    public getOutcome = () => {

        if(PokerHand.arrayOfSuits.length !== 0 && PokerHand.arrayOfRank.length !== 0){
            PokerHand.arrayOfSuits = [];
            PokerHand.arrayOfRank = [];
        }
        for (let i = 0; i < this.arr.length; i++) {
            PokerHand.arrayOfRank.push(this.arr[i][0].rank);
            PokerHand.arrayOfSuits.push(this.arr[i][0].suit);
        }
        const duplicates = PokerHand.arrayOfRank.filter((e, i, a) => a.indexOf(e) !== i);
        const flash = PokerHand.arrayOfSuits.every(v => v === PokerHand.arrayOfSuits[0]);
        if (flash &&  PokerHand.arrayOfRank.includes('10') && PokerHand.arrayOfRank.includes('J') && PokerHand.arrayOfRank.includes('Q')
            && PokerHand.arrayOfRank.includes('K') &&PokerHand.arrayOfRank.includes('A')){
            return 'Royal flash';
        }
        else if(PokerHand.arrayOfRank.filter(item => item === duplicates[0]).length === 4){
            return 'four of a kind';
        }
        else if (flash && PokerHand.arrayOfSuits.length !== 0) {
            return 'flash';
        }
        else if(PokerHand.arrayOfRank.filter(item => item === duplicates[0]).length === 3 || PokerHand.arrayOfRank.filter(item => item === duplicates[1]).length === 3){
            return 'three of a kind';}
        else if(duplicates.length === 2){
            return 'two pairs';
        }
        else if(duplicates.length === 1){
          return 'one pair';
        }
        else {return 'high card';}
};}

export default PokerHand;

