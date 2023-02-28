import { useEffect, useState } from 'react';
import Create from './Components/Dices/Create';
import List from './Components/Dices/List';
import { create, destroy, edit, read } from './Components/Dices/localStorage';
import Messages from './Components/Dices/Messages';
import './Components/Dices/style.scss';
import {v4 as uuidv4} from 'uuid';

const KEY = 'FancyDices';

function App() {

    const [lastUpdate, setLastUpdate] = useState(Date.now());
    const [list, setList] = useState(null);
    const [createData, setCreateData] = useState(null);
    const [deleteModal, setDeleteModal] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [editModal, setEditModal] = useState(null);
    const [editData, setEditData] = useState(null);
    const [messages, setMessages] = useState(null);

    useEffect(() => {
        msg('Look at this beautiful DICES', '');
    }, []);

    useEffect(() => {

        // setTimeout(() => setList(read(KEY)), 1000);

        setList(read(KEY));
        // msg('Look at this beautiful DICES', '');

    }, [lastUpdate]);

    
    useEffect(() => {
        if (null === createData) {
            return;
        }
        create(KEY, createData);
        setLastUpdate(Date.now());
        msg('Ok, there is new DICE', 'ok');
    }, [createData]);

    useEffect(() => {
        if (null === deleteData) {
            return;
        }
        destroy(KEY, deleteData.id);
        setLastUpdate(Date.now());
        msg('The DICE is gone now', 'error');
    }, [deleteData]);

    useEffect(() => {
        if (null === editData) {
            return;
        }
        edit(KEY, editData, editData.id);
        setLastUpdate(Date.now());
        msg('The DICE is different now', 'ok');
    }, [editData]);

    const msg = (text, type) => {
        const uuid = uuidv4();
        setMessages(m => [...m ?? [], {text, type, id: uuid}]);
        setTimeout(() => {
            setMessages(m => m.filter(m => uuid !== m.id));
        }, 5000);
    } 

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
        {
            messages && <Messages messages={messages} />
        }
        </>
    );

}

export default App;