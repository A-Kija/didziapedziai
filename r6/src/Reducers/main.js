import { ADD_COMMENT, COMMENTS_SHOW_EDIT, COMMENT_DELETE, COMMENT_SHOW_HIDE, COMMON_LIST, DISTRICTS_CREATE, DISTRICTS_DELETE, DISTRICTS_EDIT, DISTRICTS_LIST, DISTRICTS_SHOW_EDIT, DISTRICT_SECTION, NAVIGATE, REMOVE_MESSAGE, SECTIONS_CREATE, SECTIONS_DELETE, SECTIONS_EDIT, SECTIONS_LIST, SECTIONS_SHOW_EDIT, SHOW_MESSAGE } from "../types";
import { v4 as uuidv4 } from 'uuid';
import { actionsList } from '../store';

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
        case SECTIONS_SHOW_EDIT:
        case DISTRICTS_LIST:
        case DISTRICTS_SHOW_EDIT:
        case COMMON_LIST:
        case DISTRICT_SECTION:
        case COMMENTS_SHOW_EDIT:
            c.pageTop = 'nav';
            c.page = action.payload.page;
            c.data = action.payload.data;
            return c;

        case SECTIONS_CREATE:
        case SECTIONS_DELETE:
        case SECTIONS_EDIT:
        case DISTRICTS_CREATE:
        case DISTRICTS_DELETE:
        case DISTRICTS_EDIT:
        case ADD_COMMENT:
        case COMMENT_SHOW_HIDE:
        case COMMENT_DELETE:
        case SHOW_MESSAGE:

            console.log('PL:', action.payload);

            if (action.payload.msg) {

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
            }

            if (action.payload.show) {
                setTimeout(() => {
                    action.doDispach(actionsList[action.payload.show]());
                }, action.payload.hasOwnProperty('pauseShow') ? action.payload.pauseShow : 1000);
            }

            return c;

        case REMOVE_MESSAGE:
            c.messages = c.messages.filter(m => m.id !== action.payload.uuid);
            return c;
        default:
    }


    return state;
}