/* eslint-disable */
import React, {Component} from 'react';
import Button from './Component/Button/Button';
import styles from './App.css';

class App extends Component {

    state = {
        items: [],
        item: '',
    };


    render() {
        return (
            <div className={styles.todoListMain}>
                <form>
                    <input type="text"
                           placeholder='Enter text plea'/>
                   <Button type='submit' text='text'/>
                </form>
            </div>
        );
    }
}

export default App;
