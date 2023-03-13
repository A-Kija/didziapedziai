import { createContext, useEffect, useState } from "react";
import { useMessages } from "../Use/useMessages";
import { useModal } from "../Use/useModal";
import { useRead } from "../Use/useRead";
import { useWrite } from "../Use/useWrite";
import axios from 'axios';

export const Global = createContext();

export const GlobalProvider = ({children}) => {

    const [response, setCreate, setEdit, setDelete] = useWrite();
    const [list, setUpdate] = useRead();
    const [deleteModal, setDeleteModal, addModal, setAddModal, remModal, setRemModal] = useModal();
    const [messages, setMessage] = useMessages([]);

    const [route, setRoute] = useState('numbers');
    const [logged, setLogged] = useState(null);
    const [authName, setAuthName] = useState(null);

  

    useEffect(() => {
        setUpdate(Date.now());
        if (null !== response) {

            setMessage({text: response.message.text, type: response.message.type});
        }
    }, [response, setMessage, setUpdate]);


    const logOut = _ => {
        axios.post('http://localhost:3003/logout', {}, { withCredentials: true })
        .then(res => {
            console.log(res.data);
            setLogged(false);
            setAuthName(false);
        });
    }

    return (
        <Global.Provider value={{
            setDelete,
            setCreate,
            list,
            // start modals
            deleteModal, setDeleteModal, addModal, setAddModal, remModal, setRemModal,
            // end modals
            setEdit,
            messages,
            // route
            route, setRoute,
            // auth
            authName, setAuthName, logOut, logged, setLogged
        }}>
            {children}
        </Global.Provider>
    )
}