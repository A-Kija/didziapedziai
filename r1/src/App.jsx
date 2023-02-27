import { useEffect, useState } from 'react';
import Create from './Components/Dices/Create';
import List from './Components/Dices/List';
import { create, destroy, edit, read } from './Components/Dices/localStorage';
import './Components/Dices/style.scss';

const KEY = 'FancyDices';

function App() {

    const [lastUpdate, setLastUpdate] = useState(Date.now());
    const [list, setList] = useState(null);
    const [createData, setCreateData] = useState(null);
    const [deleteModal, setDeleteModal] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [editModal, setEditModal] = useState(null);
    const [editData, setEditData] = useState(null);

    useEffect(() => {

        // setTimeout(() => setList(read(KEY)), 1000);

        setList(read(KEY));

    }, [lastUpdate]);

    
    useEffect(() => {
        if (null === createData) {
            return;
        }
        create(KEY, createData);
        setLastUpdate(Date.now());
    }, [createData]);

    useEffect(() => {
        if (null === deleteData) {
            return;
        }
        destroy(KEY, deleteData.id);
        setLastUpdate(Date.now());
    }, [deleteData]);

    useEffect(() => {
        if (null === editData) {
            return;
        }
        edit(KEY, editData, editData.id);
        setLastUpdate(Date.now());
    }, [editData]);

    return (
        <>
        <div className="dices">
            <div className="content">
                <div className="left">
                    <Create setCreateData={setCreateData}/>
                </div>
                <div className="right">
                    <List 
                    list={list}
                    setDeleteModal={setDeleteModal}
                    deleteModal={deleteModal}
                    setDeleteData={setDeleteData}
                    editModal={editModal}
                    setEditModal={setEditModal}
                    setEditData={setEditData}
                     />
                </div>
            </div>
        </div>
        </>
    );

}

export default App;