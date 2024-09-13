import React from 'react';

interface Props {
    rankSymbol:string;
    suit:string;
   style: string
}

const Card:React.FC<Props> = ({rankSymbol, suit, style}) => {

    return (

        <div>
            <span className= {`card rank-${rankSymbol.toLowerCase()} ${style}`}>
                  <span className="rank">{rankSymbol}</span>
                  <span className="suit">{suit}</span>
         </span>
        </div>);

};

export default Card;