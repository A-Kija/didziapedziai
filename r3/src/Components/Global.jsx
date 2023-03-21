import { createContext, useEffect, useState } from 'react';
import { useModal } from '../Use/useModal';
import { useReadTrees } from '../Use/useReadTrees';
import { useWriteTrees } from '../Use/useWriteTrees';
import axios from 'axios';

const types = [
    {type: 1, typeTitle: 'Leaf Tree'},
    {type: 2, typeTitle: 'Spike Tree'},
    {type: 3, typeTitle: 'Palm Tree'}
];

export const Global = createContext();

export const GlobalProvider = ({children}) => {

    const [trees, updateTrees] = useReadTrees();
    const [treeResponse, setCreateTree, setEditTree, setDeleteTree] = useWriteTrees();
    const [editModalTree, setEditModalTree] = useModal();

    const [logged, setLogged] = useState(null);
    const [authName, setAuthName] = useState(null);

    useEffect(() => {
        updateTrees(Date.now());
    }, [updateTrees, treeResponse]);

    const logOut = _ => {
        axios.post('http://localhost:3003/logout', {}, { withCredentials: true })
        .then(_ => {
            setLogged(false);
            setAuthName(false);
            setLogged(2);
        });
    }

    return (
        <Global.Provider value={{
            trees,
            types,
            setCreateTree,
            setDeleteTree,
            setEditTree,
            editModalTree, setEditModalTree,
            logged, setLogged, authName, setAuthName,
            updateTrees,
            logOut
        }}>
            {children}
        </Global.Provider>
    )
}