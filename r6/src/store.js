import { createContext, useEffect, useReducer, useState } from 'react';
import { addComment, commentDelete, commentShowHide, commentsShowEdit, commonList, districtsCreate, districtsDelete, districtSection, districtsEdit, districtsList, districtsShowEdit, navigate, sectionsCreate, sectionsDelete, sectionsEdit, sectionsList, sectionsShowEdit } from './actions';
import main from './Reducers/main';
import axios from 'axios';
import { SHOW_MESSAGE } from './types';

export const actionsList = {
    'sections-list': sectionsList,
    'sections-create': sectionsCreate,
    'sections-delete': sectionsDelete,
    'sections-show-edit': sectionsShowEdit,
    'sections-edit': sectionsEdit,
    
    'districts-create': districtsCreate,
    'districts-list': districtsList,
    'districts-delete': districtsDelete,
    'districts-show-edit': districtsShowEdit,
    'districts-edit': districtsEdit,

    'comments-show-edit': commentsShowEdit,
    'comment-show-hide': commentShowHide,
    'comment-delete': commentDelete,

    'common-list': commonList,
    'district-section' : districtSection,
    'add-comment': addComment,
}

const pagesList = [
    'sections-list',
    'sections-create',
    'sections-delete',
    'sections-show-edit',
    'sections-edit',
    'districts-create',
    'districts-list',
    'districts-delete',
    'districts-show-edit',
    'districts-edit',
    'comments-show-edit',
    'comment-show-hide',
    'comment-delete',
    'common-list',
    'district-section',
    'add-comment',
    'show-sections-create',
    'show-districts-create',
    'login',
    'home',
    'empty'
]

const url = 'http://localhost:3003/';
const imgUrl = 'http://localhost:3003/img/';


export const Store = createContext();

export const Provider = (props) => {




    const [loader, setLoader] = useState(false);

    const [store, dispach] = useReducer(main, {
        page: 'empty',
        pageTop: 'nav'
    });

    useEffect(() => {

        console.log('app start');

        const viewHash = _ => {
            let startPage = window.location.hash.substring(1) || 'home';
            let params;

            params = startPage.split('/');

            startPage = params.shift();

            params = params.length ? params : null

            !pagesList.includes(startPage) && (startPage = '404'); // fancy if

            if (actionsList[startPage]) {
                dataDispach(actionsList[startPage](params));
            } else {
                dispach(navigate(startPage));
            }
        }

        viewHash();

        window.addEventListener('hashchange', (e) => {
            viewHash();
        });

    }, []);


    const dataDispach = action => {
        if (!action.payload || !action.payload.url) {
            dispach(action);
            setLoader(false);
        } else {
            const args = [url + action.payload.url];
            if (action.payload.body) {
                args.push(action.payload.body);
            }
            setLoader(true);
            axios[action.payload.method](...args)
                .then(res => {
                    action = {
                        ...action, payload:
                        {
                            ...action.payload, ...res.data
                        }, doDispach
                    }
                    dispach(action);
                    if(!action.payload.show) {
                        setLoader(false);
                    }
                    
                })
                .catch(error => {
                    const errorAction = {};
                    errorAction.payload = {
                        msg: { text: 'ERRRO.', type: 'danger' }
                    }
                    errorAction.type = SHOW_MESSAGE;
                    errorAction.doDispach = doDispach;
                    dispach(errorAction);

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
            start: () => setLoader(true),

            imgUrl
        }}>
            {props.children}
        </Store.Provider>
    )
}