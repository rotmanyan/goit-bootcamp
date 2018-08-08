import React from 'react';
import './Card.css';

const Card = ({photo, number, lastname, country, name}) => {
    return (
        <div className='card'>
        <img src={photo} alt="player"/>
        <div className="overlay">
          <div className="info">
            <span className="number">{number}</span>
            <p className="pasport">
              <span className="name">{name}</span>
              <span className="lastname">{lastname}</span>
            </p>
            <img src={country} alt="country" className="country"/>
          </div>
        </div>
      </div>
    );
};

export default Card;