import React from 'react';

interface Props {
    rankSymbol:string;
    suit:string
}

const Card:React.FC<Props> = ({rankSymbol, suit}) => {

    return (
        <div>
            <span className="card rank-k diams">
                  <span className="rank">{rankSymbol}</span>
                  <span className="suit">{suit}</span>
         </span>
        </div>
    );
};

export default Card;