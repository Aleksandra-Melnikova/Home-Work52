import Card1 from './card1.ts';


class PokerHand {
    constructor(public arr: Card1[][]) {
        this.arr = arr;
    }

    public getOutcome = () => {
        const arrayOfRank: string[] = [];

        const arrayOfSuits:string[] = [];
        for (let i = 0; i < this.arr.length; i++) {
            arrayOfRank.push(this.arr[i][0].rank);
            arrayOfSuits.push(this.arr[i][1].suit);
        }
        console.log(arrayOfRank);
        console.log(arrayOfSuits);
        const duplicates = arrayOfRank.filter((e, i, a) => a.indexOf(e) !== i);
        const flash = arrayOfSuits.every(v => v === arrayOfSuits[0]);
        if (flash && arrayOfSuits.length !== 0) {
            return 'flash';
        }
        else if(arrayOfRank.filter(item => item === duplicates[0]).length === 3 || arrayOfRank.filter(item => item === duplicates[1]).length === 3){
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

