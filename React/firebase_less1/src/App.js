/*
import React, {Component} from 'react';
import {database} from "./firebase";

class App extends Component {
    state = {
        data: null,
        newData: '',
    };

/!*    componentDidMount() {
        database.ref().on('value', (snapshot) => {
            this.setState({data: snapshot.val()})
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        database.ref('/newData').push(this.state.newData);
    };

    // handleAdd = (event) => {
    //     event.preventDefault();
    //     this.setState({newData: event.target.value})
    // };*!/

    render() {
        return (
            <div className="App">
                <pre>
                    <form>
                        <input type="text" placeholder='Please write'/>
                        <input type="submit"/>
                    </form>
                </pre>
            </div>
        );
    }
}

export default App;
*/

import React, { Component } from "react";
import ToDoList from "./ToDoList/ToDoList";

class App extends Component {
    render() {
        return (
            <div className="container">
                <ToDoList />
            </div>
        );
    }
}

export default App;