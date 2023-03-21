import { createContext, useEffect } from 'react';
import { useModal } from '../Use/useModal';
import { useReadTrees } from '../Use/useReadTrees';
import { useWriteTrees } from '../Use/useWriteTrees';

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

    useEffect(() => {
        updateTrees(Date.now());
    }, [updateTrees, treeResponse]);

    return (
        <Global.Provider value={{
            trees,
            types,
            setCreateTree,
            setDeleteTree,
            setEditTree,
            editModalTree, setEditModalTree
        }}>
            {children}
        </Global.Provider>
    )
}