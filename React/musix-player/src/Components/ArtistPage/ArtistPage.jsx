import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ArtistPage.css'
import Card from "../Card/Card";

const ArtistPage = ({artistsData}) => {
    return (
        <div className='content'>
            {artistsData.map(el => <Card url={el.image[2]['#text']}
                                         name={el.name}
                                         listeners={`Listener - ${el.listeners}`}/>)}
        </div>
    );
};

// ArtistPage.propTypes = {
//
// };

export default ArtistPage;