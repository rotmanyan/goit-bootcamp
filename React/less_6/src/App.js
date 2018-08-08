import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {Switch, Route, NavLink} from 'react-router-dom';
import Home from './Home';
import Team from './Team';
import data from './data';
import './App.css';

class App extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <div className="App">
                <header>
                    <img src="" className="App-logo" alt="logo"/>
                    <nav>
                        <NavLink exact to='/'>Home</NavLink>
                        <NavLink to='/team'>Team</NavLink>
                    </nav>
                </header>
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route path='/team' render={props => <Team {...props} data={data}/>} />
                </Switch>
            </div>
        );
    }
}

export default App;