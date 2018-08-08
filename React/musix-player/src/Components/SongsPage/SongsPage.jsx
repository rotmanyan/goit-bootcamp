import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SongsCard from '../SongsCard/SongsCard';
import './SongsPage.css';

const SongsPage = ({songsData}) => {
        return (
            <div className='content'>
                {songsData.map(el => <SongsCard url={el.image[1]['#text']}
                                                name={el.name}
                                                artist={el.artist.name}
                                                key={el.url}/>)}
            </div>
        );
};

export default SongsPage;
