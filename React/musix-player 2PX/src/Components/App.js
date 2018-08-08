import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Loader from 'react-loader-spinner'
import Sidebar from './Sidebar/Sidebar';
import Search from './Search/Search';
import ArtistPage from './ArtistPage/ArtistPage';
import SongsPage from './SongsPage/SongsPage';
import AlbumPage from './AlbumPage/AlbumPage';
import {fetchData} from '../helpers/fetch';
import './App.css';


class App extends Component {

    state ={
        artistsData:[],
        albumsData:[],
        songsData: [],
        searchValue: '',
        isLoading: true,
        favoriteArtists: [],
        favoriteAlbums: [],
        favoriteSongs: [],
        interestingArtists: [],
        interestingAlbums: [],
        interestingSongs: [],
    };


    componentDidMount() {

        fetchData('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=412e51e107155c7ffabd155a02371cbd&limit=48&format=json')
        .then(data => (
            this.setState({
                artistsData: data.artists.artist.sort((a,b) => (+b.listeners)-(+a.listeners)),
                isLoading: false,
            })
        ));

        fetchData('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=pop&api_key=412e51e107155c7ffabd155a02371cbd&limit=48&format=json')
        .then(data => (
            this.setState({
                albumsData: data.albums.album,
            })
        ));

        fetchData('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=412e51e107155c7ffabd155a02371cbd&limit=48&format=json')
        .then(data => (
            this.setState({
                songsData: data.tracks.track,
            })
        ))
    }

    addFavourite = ({target}) => {
        const index = target.dataset.index;
        const arrForAdd = target.dataset.arrForAdd;
        const check = target.dataset.check;
        const curentItem = this.state[check][index];
        if(!this.state[arrForAdd].includes(curentItem)){
            this.setState(prev =>({
                [arrForAdd]: [curentItem, ...prev[arrForAdd]]
            }),()=> {
                localStorage.setItem(`${arrForAdd}`, JSON.stringify(this.state[arrForAdd]))
            })
        }
    };

    inputChange = (e) => {
        const value = e.target.value.toLowerCase();
        const name = e.target.name;
            this.setState({
            [name]: value
        })
        
    };

    searchData = (e) => {
        e.preventDefault();
        if (this.state.searchValue === '') {
            return
        }
        fetchData(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${this.state.searchValue}&api_key=412e51e107155c7ffabd155a02371cbd&format=json`)
        .then(({results}) => {
            this.setState({
                artistsData: results.artistmatches.artist
            })
        });

        fetchData(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${this.state.searchValue}&api_key=412e51e107155c7ffabd155a02371cbd&format=json`)
        .then(({results}) => {
            this.setState({
                albumsData: results.albummatches.album
            })
        });

        fetchData(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${this.state.searchValue}&api_key=412e51e107155c7ffabd155a02371cbd&format=json`)
        .then(({results}) => {
            this.setState({
                songsData: results.trackmatches.track
            })
        })
    };

    render() {
        const {songsData, albumsData, artistsData, searchValue, isLoading, favoriteArtists, favoriteAlbums, favoriteSongs, interestingAlbums, interestingArtists, interestingSongs} = this.state;
        return (
            <div className='wrapper'>
                <div className="container">
                    <Sidebar/>
                    <main className='main'>
                        <Search value={searchValue} onChange={this.inputChange} handlerSearch = {this.searchData}/>
                        {isLoading ? <div className='loader'>
                        <Loader
                        type="ThreeDots"
                        color="var(--red)"
                        height="100"
                        width="100"/>
                        </div> :
                        <div>
                            <Switch>

                                <Route exact path='/' render ={() => <ArtistPage artistsData={artistsData}
                                addFavourite={this.addFavourite}/>}/> 
                                <Route path='/albums' render= {() => <AlbumPage albumsData={albumsData}
                                addFavourite={this.addFavourite}/>}/>
                                <Route path= '/songs' render = {() => <SongsPage songsData={songsData}
                                addFavourite={this.addFavourite}/>}/>

                                <Route path='/FavouritesArtists' render ={() => <ArtistPage artistsData={favoriteArtists}
                                addFavourite={this.addFavourite}/>}/>
                                <Route path='/FavouritesAlbums' render= {() => <AlbumPage albumsData={favoriteAlbums}
                                addFavourite={this.addFavourite}/>}/>
                                <Route path= '/FavouritesSongs' render = {() => <SongsPage songsData={favoriteSongs}/>}/>

                                <Route path='/interestingArtists' render ={() => <ArtistPage artistsData={interestingArtists}
                                addFavourite={this.addFavourite}/>}/>
                                <Route path='/interestingAlbums' render= {() => <AlbumPage albumsData={interestingAlbums}
                                addFavourite={this.addFavourite}/>}/>
                                <Route path= '/interestingSongs' render = {() => <SongsPage songsData={interestingSongs}/>}/>

                                </Switch>
                                </div>
                            }
                    </main>
                </div>
            </div>
        );
    }
}

App.propTypes = {

};

export default App;

