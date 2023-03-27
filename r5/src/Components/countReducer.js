export default function countReducer(state, action) {

    switch (action.type) {
        case 'add_1':
            return state + 1;
        case 'rem_1':
            return state - 1;
        case 'add_3':
            return state + 3;
        case 'rem_3':
            return state - 3;
        case 'add':
            return state + action.payload;
        default:
            return state;
    }


}