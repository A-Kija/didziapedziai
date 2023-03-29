import { createContext, useReducer } from 'react';
import { sectionsCreate, sectionsList } from './actions';
import main from './Reducers/main';
import axios from 'axios';
import { useMessages } from './Use/useMessages';

const actionsList = {
    ['sections-list']: sectionsList,
    ['sections-create']: sectionsCreate,
   
}

const url = 'http://localhost:3003/';


export const Store = createContext();

export const Provider = (props) => {

    const [store, dispach] = useReducer(main, {
        page: 'home',
        pageTop: 'nav'
    });


    const dataDispach = action => {
        if (!action.payload || !action.payload.url) {
            dispach(action);
        } else {
            const args = [url + action.payload.url];
            if (action.payload.body) {
                args.push(action.payload.body);
            }
            axios[action.payload.method](...args)
                .then(res => {
                    action = {
                        ...action, payload:
                        {
                            ...action.payload, ...res.data
                        }, doDispach
                    }
                    dispach(action);
                })
        }


    }

    const doDispach = action  => {
        dataDispach(action);
    }

    return (
        <Store.Provider value={{
            page: store.page,
            pageTop: store.pageTop,

            store,
            dispach: dataDispach,
            actionsList,
            messages: store.messages
        }}>
            {props.children}
        </Store.Provider>
    )
}