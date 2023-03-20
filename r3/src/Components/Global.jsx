import { createContext, useEffect } from 'react';
import { useReadTrees } from '../Use/useReadTrees';


export const Global = createContext();

export const GlobalProvider = ({children}) => {

    const [trees, updateTrees] = useReadTrees();

    useEffect(() => {
        updateTrees(Date.now());
    }, [updateTrees]);

    return (
        <Global.Provider value={{
            trees
            
        }}>
            {children}
        </Global.Provider>
    )
}