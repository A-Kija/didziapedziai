import { createContext, useEffect } from 'react';
import { useMessages } from './useMessages';
import { useDataDelete } from './useDataDelete';
import { useDataList } from './useDataList';
import { useModal } from './UseModal';
import { useDataCreate } from './useDataCreate';
import { useDataEdit } from './useDataEdit';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {

    const [messages, addMessage] = useMessages([]);
    const [deleteRes, setDeleteData] = useDataDelete(null);
    const [createRes, setCreateData] = useDataCreate(null);
    const [editRes, setEditData] = useDataEdit(null);
    const [list, setLastUpdate] = useDataList(null);
    const [deleteModal, setDeleteModal, editModal, setEditModal] = useModal();

    useEffect(() => {
        if (null === deleteRes) {
            return;
        }
        addMessage({text: deleteRes.message.text, type: deleteRes.message.type});
        setLastUpdate(Date.now());
    }, [deleteRes, addMessage, setLastUpdate]);

    useEffect(() => {
        if (null === createRes) {
            return;
        }
        addMessage({text: createRes.message.text, type: createRes.message.type});
        setLastUpdate(Date.now());
    }, [createRes, addMessage, setLastUpdate]);

    useEffect(() => {
        if (null === editRes) {
            return;
        }
        addMessage({text: editRes.message.text, type: editRes.message.type});
        setLastUpdate(Date.now());
    }, [editRes, addMessage, setLastUpdate]);



    return (
        <GlobalContext.Provider value={{
            messages,
            setDeleteData,
            list,
            deleteModal,
            setDeleteModal,
            editModal,
            setEditModal,
            setCreateData,
            setEditData
        }}>
            {children}
        </GlobalContext.Provider>
    )
}