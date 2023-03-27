export default function countReducer(state, action) {

    const copy = {...state };

    switch (action.type[1]) {
        case 'add_1':
            copy.number = copy.number + 1;
            break;
        case 'rem_1':
            copy.number = copy.number - 1;
            break;
        case 'add_3':
            copy.number = copy.number + 3;
            break;
        case 'rem_3':
            copy.number = copy.number - 3;
            break;
        case 'add':
            copy.number = copy.number + action.payload;
            break;
        default:
    }

    return copy;

}