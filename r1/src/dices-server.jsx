import { useEffect, useState } from 'react';
import Create from './Components/Dices-Server/Create';
import List from './Components/Dices-Server/List';
import './Components/Dices-Server/style.scss';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Messages from './Components/Dices/Messages';

const URL = 'http://localhost:3003/dices';

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
        axios.get(URL)
            .then(res => {
                setList(res.data);
            });
    }, [lastUpdate]);



    useEffect(() => {
        if (null === createData) {
            return;
        }
        // pazadas
        const promiseId = uuidv4();
        setList(d => [...d, { ...createData, promiseId }]);

        // serveris
        axios.post(URL, { ...createData, promiseId })
            .then(res => {
                setList(d => d.map(d => res.data.promiseId === d.promiseId ? { ...d, id: res.data.id, promiseId: null } : { ...d }));
                msg(res.data.message.text, res.data.message.type);
            });

    }, [createData]);


    useEffect(() => {
        if (null === deleteData) {
            return;
        }
        axios.delete(URL + '/' + deleteData.id)
            .then(res => {
                console.log(res.data);
                setLastUpdate(Date.now());
                msg(res.data.message.text, res.data.message.type);
            });

    }, [deleteData]);


    useEffect(() => {
        if (null === editData) {
            return;
        }
        axios.put(URL + '/' + editData.id, editData)
            .then(res => {
                console.log(res.data);
                setLastUpdate(Date.now());
                msg(res.data.message.text, res.data.message.type);
            });

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
                        <Create setCreateData={setCreateData} />
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