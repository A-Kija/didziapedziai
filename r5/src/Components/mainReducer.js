import countReducer from './countReducer';
import squareReducer from './squareReducer';

export default function mainReducer(state, action) {
    switch (action.type[0]) {
        case 'c':
            return countReducer(state, action);
        case 'sq':
            return squareReducer(state, action);
        default:
            return state;
    }
}