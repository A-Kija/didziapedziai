import { createContext, useReducer, useState } from 'react';
import { sectionsCreate, sectionsDelete, sectionsEdit, sectionsList, sectionsShowEdit } from './actions';
import main from './Reducers/main';
import axios from 'axios';

export const actionsList = {
    'sections-list': sectionsList,
    'sections-create': sectionsCreate,
    'sections-delete': sectionsDelete,
    'sections-show-edit': sectionsShowEdit,
    'sections-edit': sectionsEdit,
}

const url = 'http://localhost:3003/';


export const Store = createContext();

export const Provider = (props) => {


    const [loader, setLoader] = useState(false);

    const [store, dispach] = useReducer(main, {
        page: 'home',
        pageTop: 'nav'
    });


    const dataDispach = action => {
        if (!action.payload || !action.payload.url) {
            dispach(action);
            setLoader(false);
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
                    setLoader(false);
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
            messages: store.messages,
            loader,
            start: () => setLoader(true)
        }}>
            {props.children}
        </Store.Provider>
    )
}