import { createContext, useReducer } from 'react';
import main from './Reducers/main';


export const Store = createContext();

export const Provider = (props) => {

    const [store, dispach] = useReducer(main, {
        page: 'home',
        pageTop: 'nav'
    });




    return (
        <Store.Provider value={{
            page: store.page,
            pageTop: store.pageTop,

            dispach

        }}>
            {props.children}
        </Store.Provider>
    )
}