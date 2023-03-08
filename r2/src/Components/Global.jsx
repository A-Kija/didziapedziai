import { createContext, useEffect } from "react";
import { useModal } from "../Use/useModal";
import { useRead } from "../Use/useRead";
import { useWrite } from "../Use/useWrite";

export const Global = createContext();

export const GlobalProvider = ({children}) => {

    const [response, setCreate, setEdit, setDelete] = useWrite();
    const [list, setUpdate] = useRead();
    const [deleteModal, setDeleteModal, addModal, setAddModal, remModal, setRemModal] = useModal();


    useEffect(() => {
        setUpdate(Date.now());
    }, [response]);

    return (
        <Global.Provider value={{
            setDelete,
            setCreate,
            list,
            // start modals
            deleteModal, setDeleteModal, addModal, setAddModal, remModal, setRemModal,
            // end modals
            setEdit
        }}>
            {children}
        </Global.Provider>
    )
}