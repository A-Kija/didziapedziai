import { NAVIGATE, SECTIONS_LIST } from "../types";

export default function main(state, action) {

    const c = structuredClone(state);

    console.log('REDUCER: ', action);

    switch (action.type) {
        case NAVIGATE:
            c.page = action.payload.to;
            let defaultNav = 'nav';

            switch (action.payload.to) {
                case 'login':
                case 'register':
                    c.pageTop = '';
                    break;
                default:
                    c.pageTop = defaultNav;
            }
            return c;
        case SECTIONS_LIST:
            c.pageTop = 'nav';
            c.page = action.payload.page;
            c.data = action.payload.data;
            return c;
        default:
    }


    return state;
}