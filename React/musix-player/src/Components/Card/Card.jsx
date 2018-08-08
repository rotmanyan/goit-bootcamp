import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'

const Card = props => {
    return (
            <div className="artist-card">
                <figure>
                    <img src={props.url} alt="artist" className="artist-card__img"/>
                    <figcaption>
                        <p className="artist-card__name">{props.name}</p>
                        <p className="artist-card__number-albums">{props.listeners}</p>
                    </figcaption>
                </figure>
            </div>
    )
};

Card.propTypes = {
    
};

export default Card