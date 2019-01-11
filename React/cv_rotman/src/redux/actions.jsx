import {INCREMENT, DECREMENT} from './constants'

const add = () => ({
    type: INCREMENT,
    payload: 1
});

const sub = () => ({
    type: DECREMENT,
    payload: 1
});

export {add, sub};
