import { createContext, useEffect } from "react";
import { useMessages } from "../Use/useMessages";
import { useModal } from "../Use/useModal";
import { useRead } from "../Use/useRead";
import { useWrite } from "../Use/useWrite";

export const Global = createContext();

export const GlobalProvider = ({children}) => {

    const [response, setCreate, setEdit, setDelete] = useWrite();
    const [list, setUpdate] = useRead();
    const [deleteModal, setDeleteModal, addModal, setAddModal, remModal, setRemModal] = useModal();
    const [messages, setMessage] = useMessages([]);

    useEffect(() => {
        setUpdate(Date.now());
        if (null !== response) {

            setMessage({text: response.message.text, type: response.message.type});
        }
    }, [response]);

    return (
        <Global.Provider value={{
            setDelete,
            setCreate,
            list,
            // start modals
            deleteModal, setDeleteModal, addModal, setAddModal, remModal, setRemModal,
            // end modals
            setEdit,
            messages
        }}>
            {children}
        </Global.Provider>
    )
}