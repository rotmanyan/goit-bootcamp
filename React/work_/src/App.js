/* eslint-disable */
import React, {Component} from 'react';
import ToDoList from './Components/ToDoList/ToDoList';
import Button from './Components/Button/Button';
import styles from './App.css';

// const tasks = [
//     {
//         text: 'qqqqq',
//         id: '1324'
//     },
//     {
//         text: 'wwww',
//         id: '214'
//     },
//     {
//         text: 'eeee',
//         id: '345'
//     }
// ];

class App extends Component {

    state = {
        items: [],
        item: '',
    };

    addItem = (e) => {
        e.preventDefault();
        const value = this.state.item;
        const date = Date.now();
        const task = {
            text: value,
            id: date,
        };

        if (this.state.item !== '') {
            this.setState(prevState => ({
                items: [task, ...prevState.items],
                item: '',
            }))
        }
    };

    deleteItem = (id) => {
        // this.state.items.filter(id)
        const filter = this.state.items.filter(el => el.id !== id);
        console.log(filter);
        this.setState({
            items: filter,
        })
    };

    updateItem = (id, text) => {
        const updateResult = this.state.items.map(el => (el.id === id ? {...el, text:text} : el));
        this.setState({
            items: updateResult,
        })
    };

    itemChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value,
        });
    };


    render() {
        return (
            <div className={styles.todoListMain}>
                <div>
                    <form onSubmit={this.addItem}>
                        <input type="text"
                               placeholder='Enter task'
                               className={styles.input}
                               name='item'
                               value={this.state.item}
                               onChange={this.itemChange}
                        />
                        <Button type='submit' text="Add"/>
                    </form>
                    <ToDoList tasks={this.state.items}
                              deleteItem={this.deleteItem}
                              update={this.updateItem}/>
                </div>
            </div>
        )
    }
}

export default App;