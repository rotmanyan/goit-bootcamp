import {INCREMENT, DECREMENT} from './constants';

const initialState = {value: 0};

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {...state, value: state.value + action.payload}
        case DECREMENT:
            return Object.assign({}, state, {value: state.value - action.payload});
        default:
            return state;
    }
}
