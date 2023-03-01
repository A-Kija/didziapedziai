import { useEffect, useState } from 'react';
import Create from './Components/Dices-Server/Create';
import List from './Components/Dices-Server/List';
import './Components/Dices-Server/style.scss';
import axios from 'axios';

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

    }, []);



    useEffect(() => {
        if (null === createData) {
            return;
        }
        axios.post(URL, createData)
        .then(res => {
            console.log(res.data);
        });

    }, [createData])

    

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
            // messages && <Messages messages={messages} />
        }
        </>
    );

}

export default App;