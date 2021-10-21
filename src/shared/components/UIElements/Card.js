//this is for showing the info of a user in card view.
import React from 'react';

import './Card.css';

const Card = props => {
    return (
        <div className={`card ${props.className}`} style={props.style}>
            {props.children}
        </div>
    );
};

export default Card;
