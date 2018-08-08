import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from "../Card/Card";
import './AlbumPage.css';

const AlbumPage = ({albumsData}) => {
    return (
        <div className='content'>
            {albumsData.map(el => <Card url={el.image[2]['#text']}
                                        name={el.name}
                                        listeners={el.artist.name}
                                        artist={el.artist.name}
                                        key={el.name}/>)}
        </div>);
};

export default AlbumPage;
