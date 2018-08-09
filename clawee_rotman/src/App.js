/* eslint-disable */
import React, {Component} from 'react';
import ToDoList from './Components/ToDoList/ToDoList';
import Button from './Components/Button/Button';
import {database} from "./firebase/index";
import styles from './App.css';

class App extends Component {

    // const dataBaseRef = database.ref();

    state = {
        items: [],
        item: '',
        data: {},
    };

    componentDidMount() {
       // database.ref().on('value',(snapshot) => {
       //      this.setState({data: snapshot.val()})
       //  }
        database.ref('/items').once('value')
            .then(snapshot => snapshot.val())
            .then(data => Object.values(data))
            .then(result => {
                this.setState({
                    items: result,
                })
            });
    }

    addItem = (e) => {
        e.preventDefault();
        const value = this.state.item;
        const task = {
            text: value,
        };
        const key = database.ref('/items').push(task).key;
        task.id = key;
        let updates = {};
        updates['/items/' + key] = task;
        database.ref().update(updates);


        if (this.state.item !== '') {
            // database.ref('/items').push(task);
            this.setState(prevState => ({
                items: [task, ...prevState.items],
                item: '',
            }))
        }
    };

    deleteItem = (id) => {
        const filter = this.state.items.filter(el => el.id !== id);
        database.ref('/items').child(id).remove();

        this.setState({
            items: filter,
        })
    };

    // handleRemove() {
    //     return firebase.database().ref('items').child(id).remove();
    // };


    updateItem = (id, text) => {
        // const updateResult = this.state.items.map(el => (el.id === id
        //     ? {...el, text:text}
        //     : el));
        const items = {...this.state.items};
        items[item.id] = item;

        this.setState({items});
        // this.setState({
        //     items: updateResult,
        // })
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
                        <Button type='submit'
                                text="Add"/>
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