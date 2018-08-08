import React from 'react';
import PropTypes from 'prop-types';
import './SongsCard.css'

const SongsCard = props => {
    return (
        <div className="songs-item">
            <figure className="songs-item__figure">
                <img className="songs-item__img" src={props.url} alt="image"/>
                    <figcaption className="songs-item__discription">
                        <p className="songs-item__music-name">{props.name}</p>
                        <p className="songs-item__singer">{props.artist}</p>
                    </figcaption>
            </figure>
        </div>
)
};

SongsCard.propTypes = {

};

export default SongsCard;