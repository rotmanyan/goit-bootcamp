import React, {Component} from 'react';
import Modal from './Component/Modal/Modal';
import './App.css';

class App extends Component {
    close = (e) => {
        console.log(e.target.children);
    };

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div>
                    <Modal close={this.close}>
                        <h2>VPOS</h2>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default App;
