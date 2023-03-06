import { createContext, useEffect } from 'react';
import { useMessages } from './useMessages';
import { useDataDelete } from './useDataDelete';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {

    const [messages, addMessage] = useMessages([]);
    const [deleteRes, setDeleteData] = useDataDelete(null);

    useEffect(() => {
        if (null === deleteRes) {
            return;
        }
        addMessage({text: deleteRes.message.text, type: deleteRes.message.type});
    }, [deleteRes, addMessage]);

    return (
        <GlobalContext.Provider value={{
            messages,
            setDeleteData
        }}>
            {children}
        </GlobalContext.Provider>
    )
}