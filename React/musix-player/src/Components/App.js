import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import Search from './Search/Search';
import ArtistPage from './ArtistPage/ArtistPage'
import SongsPage from "./SongsPage/SongsPage";
import AlbumPage from "./AlbumPage/AlbumPage";
import fetchData from '../helpers/fetch';
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {

    state = {
        songsData: [],
        artistsData: [],
        albumsData: [],
        searchValue: '',
        isLoading: true,
    };

    componentDidMount() {

        fetchData('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=e900a41307805d11c3527e8aeebf5d4b&format=json')
            .then(data => (
                this.setState({
                    artistsData: data.artists.artist.sort((a, b) => a.listeners - b.listeners),
                    isLoading: false
                })
            ));

        fetchData('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=pop&api_key=e900a41307805d11c3527e8aeebf5d4b&format=json')
            .then(data => (
                this.setState({
                    albumsData: data.albums.album
                })
            ));

        fetchData('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=e900a41307805d11c3527e8aeebf5d4b&format=json')
            .then(data => (
                this.setState({
                    songsData: data.tracks.track
                })
            ));
    };

    inputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    };

    searchData = (searchQuery) => {

    };

    render() {
        const {songsData, albumsData, artistsData, searchValue, isLoading} = this.state;
        return (
            <div className='wrapper'>
                <div className="container">
                    <Sidebar/>
                    <main className='main'>
                        <Search value={searchValue}
                                onChange={this.inputChange}/>
                        <div>
                            {isLoading ?
                                <Switch>
                                    <Route exact path='/' render={() => <ArtistPage artistsData={artistsData}/>}/>
                                    <Route path='/songs' render={() => <SongsPage songsData={songsData}/>}/>
                                    <Route path='/albums' render={() => <AlbumPage albumsData={albumsData}/>}/>
                                </Switch>
                                : <div className='loader'>
                                    <Loader type="Bars"
                                            color="#d32f2f"
                                            height="50%"
                                            width="50%"/>
                                </div>}
                            {/*<ArtistPage artistsData={artistsData}/>*/}
                            {/*<SongsPage songsData={songsData}/>*/}
                            {/*<AlbumPage albumsData={albumsData}/>*/}
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default App;