import React from 'react';

interface Props {
    rankSymbol:string;
    suit:string;
}

const Card:React.FC<Props> = ({rankSymbol, suit}) => { let style:string = '';
    if (suit === '♦'){
        style = 'diams';
    } else if (suit === '♥'){
        style = ' hearts';
    } else if (suit ==='♣') {
        style = ' clubs';
    } else if (suit === '♠'){
        style = ' spades';}
    return (
            <span className= {`card rank-${rankSymbol.toLowerCase()} ${style}`}>
                  <span className="rank">{rankSymbol}</span>
                  <span className="suit">{suit}</span>
         </span>
    );

};

export default Card;