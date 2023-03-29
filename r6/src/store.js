import { createContext, useReducer } from 'react';
import { sectionsList } from './actions';
import main from './Reducers/main';
import axios from 'axios';

const actionsList = {
    ['sections-list']: sectionsList,
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
            dispach(action)
        } else {
            axios[action.payload.method](url + action.payload.url)
                .then(res => {
                    console.log(res.data)
                    action = {
                        ...action, payload:
                        {
                            ...action.payload, ...res.data
                        }
                    }
                    dispach(action);
                })
        }


    }



    return (
        <Store.Provider value={{
            page: store.page,
            pageTop: store.pageTop,

            store,
            dispach: dataDispach,
            actionsList
        }}>
            {props.children}
        </Store.Provider>
    )
}