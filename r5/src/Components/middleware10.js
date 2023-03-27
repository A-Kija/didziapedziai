export default function middleware10(state, action) {

    if (action.type[1] === 'add_1' && state.number >= 10) {
        action.type[1] = '';
    } else if (action.type[1] === 'add_3' && state.number >= 8) {
        action.type[1] = '';
    } else if (action.type[0] === 'c' &&
        action.type[1] === 'add' &&
        state.number + action.payload > 10) {
        action.type[1] = '';
    } else if (action.type[0] === 'sq' &&
        action.type[1] === 'add' &&
        state.sq.length >= 10) {
        action.type[1] = '';
    }

}