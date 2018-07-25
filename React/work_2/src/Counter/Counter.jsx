import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class Counter extends Component {

    // constructor() { //СТАРЫЙ СПОСОБ ЗАПИСИ
    //     super();
    //     this.state = {
    //         counterStart: 0,
    //     }

    //     this.plus = this.plus.bind(this);
    //     this.minus = this.minus.bind(this);   
    // }


    // НОВЫЙ СПОСОБ!!!
    state = {
        isActive: true,        
        counterStart: 0,
    };

    // setState(obj or function(prevState), callback()) схема

    plus = () => {
        console.log(this.state.counterStart);
        this.setState(prevState => ({counterStart: prevState.counterStart + 1}))
        // console.log('plus');
        // console.log(this); 
    };

    minus = () => {
        this.setState(prevState => ({counterStart: prevState.counterStart - 1}))

        // console.log('minus');
        // this.setState({ меняем через обьект ключ если не важно предыдущее значение
        //     counterStart: 5,
        // });
    };

    render() {
        // console.log(this.props);
        const {counterStart} = this.state;
        return (
            <div>
                <p>{counterStart}</p>
                <button onClick={this.plus}>Plus</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        )
    };
};

export default Counter;












// static propTypes = {
    //     start: PropTypes.number, 
    // };

    // static defaultProps = {
    //     start: 100, 
    // }