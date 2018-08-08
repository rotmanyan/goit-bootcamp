import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './ToDo.css';

class ToDo extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {
        isEdit: false,
        taskText: this.props.text,
    };

    deleteLi = () => {
        this.props.deleteItem(this.props.id)
    };

    edit = () => {
        this.setState(state => ({
            isEdit: !state.isEdit,
        }))
    };

    inputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value,
        })
    };

    taskUpdate = () => {
        this.props.update(this.props.id, this.state.taskText);
        this.edit();
    };

    render() {
        const {text} = this.props;
        return (
            <li className={styles.theList__item}>
                {this.state.isEdit ?
                    <div>
                        <input type="text" value={this.state.taskText} name='taskText' onChange={this.inputChange}/>
                        <Button text='Save' onClick={this.taskUpdate}/>
                        <Button text='Cancel' onClick={this.edit}/>
                    </div>
                    :
                    <div>
                        {text}
                        <Button text='Edit' onClick={this.edit}/>
                        <Button text='Delete' onClick={this.deleteLi}/>
                    </div>
                }
            </li>
        );
    }
}

ToDo.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    deleteItem: PropTypes.func,
};

export default ToDo;
