export default function squareReducer(state, action) {
    const copy = {...state };

    switch (action.type[1]) {
        case 'add':
            copy.sq.push('');
            break;
        default:
    }

    return copy;
}