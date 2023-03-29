import { NAVIGATE, REMOVE_MESSAGE, SECTIONS_CREATE, SECTIONS_LIST } from "../types";
import { v4 as uuidv4 } from 'uuid';

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

        case SECTIONS_CREATE:
            const uuid = uuidv4();
            if (!c.messages) {
                c.messages = [];
            }
            c.messages.push({...action.payload.msg, id: uuid })

            setTimeout(() => {
                action.doDispach({
                    type: REMOVE_MESSAGE,
                    payload: {
                        uuid
                    }
                });
            }, 3000);
            return c;

        default:
    }


    return state;
}