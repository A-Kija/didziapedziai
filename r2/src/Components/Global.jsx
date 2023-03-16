import { createContext, useEffect, useState } from "react";
import { useMessages } from "../Use/useMessages";
import { useModal } from "../Use/useModal";
import { useRead } from "../Use/useRead";
import { useWrite } from "../Use/useWrite";
import axios from 'axios';
import { useReadUsers } from "../Use/useReadUsers";
import { useWriteUsers } from "../Use/useWriteUsers";

export const Global = createContext();

export const GlobalProvider = ({children}) => {

    const [response, setCreate, setEdit, setDelete] = useWrite();
    const [list, setUpdate] = useRead();
    const [deleteModal, setDeleteModal, addModal, setAddModal, remModal, setRemModal] = useModal();
    const [messages, setMessage] = useMessages([]);

    const [users, setUpdateUsers] = useReadUsers();
    const [userResponse, setUserDelete] = useWriteUsers();

    const [route, setRoute] = useState('home');
    const [logged, setLogged] = useState(null);
    const [authName, setAuthName] = useState(null);
    const [authRole, setAuthRole] = useState(null);

  

    useEffect(() => {
        if (null === response) {
            return;
        }
        setUpdate(Date.now());
        if (null !== response) {
            setMessage({text: response.message.text, type: response.message.type});
        }
    }, [response, setMessage, setUpdate]);


    useEffect(() => {
        if (null === userResponse) {
            return;
        }
        setUpdateUsers(Date.now());
        if (userResponse.code) {
            setMessage({text: userResponse.message ? userResponse.message : userResponse.code, type: 'danger'});
        }
        else {
            setMessage({text: userResponse.message.text, type: userResponse.message.type});
        }
    }, [userResponse, setMessage, setUpdateUsers]);


    useEffect(() => {

        setLogged(null);

    }, [route])


    const logOut = _ => {
        axios.post('http://localhost:3003/logout', {}, { withCredentials: true })
        .then(res => {
            setLogged(false);
            setAuthName(false);
            setRoute('home');
        });
    }

    return (
        <Global.Provider value={{
            setDelete,
            setCreate,
            setUpdate,
            list,
            // start modals
            deleteModal, setDeleteModal, addModal, setAddModal, remModal, setRemModal,
            // end modals
            setEdit,
            messages,
            // route
            route, setRoute,
            // auth
            authName, setAuthName, logOut, logged, setLogged, authRole, setAuthRole,
            //users
            users, setUpdateUsers,
            userResponse, setUserDelete
            
        }}>
            {children}
        </Global.Provider>
    )
}