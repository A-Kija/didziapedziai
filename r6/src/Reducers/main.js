import { NAVIGATE } from "../types";

export default function main(state, action) {

    const c = structuredClone(state);

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
    }


    return state;
}