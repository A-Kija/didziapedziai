import { useEffect, useState } from 'react';
import Create from './Components/Dices2/Create';
import List from './Components/Dices2/List';
import './Components/Dices2/style.scss';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import Messages from './Components/Dices2/Messages';
import { GlobalContextProvider } from './Components/Dices2/GlobalContext';

const URL = 'http://localhost:3003/dices';


function App() {

    const [lastUpdate, setLastUpdate] = useState(Date.now());
    const [list, setList] = useState(null);
    const [createData, setCreateData] = useState(null);
    const [deleteModal, setDeleteModal] = useState(null);
    
    const [editModal, setEditModal] = useState(null);
    const [editData, setEditData] = useState(null);

  

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
                // addMessage({text: res.data.message.text, type: res.data.message.type});
            });

    }, [createData]);





    useEffect(() => {
        if (null === editData) {
            return;
        }
        axios.put(URL + '/' + editData.id, editData)
            .then(res => {
                console.log(res.data);
                setLastUpdate(Date.now());
                // addMessage({text: res.data.message.text, type: res.data.message.type});
            });

    }, [editData]);



    return (
        <GlobalContextProvider>
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
                            editModal={editModal}
                            setEditModal={setEditModal}
                            setEditData={setEditData}
                        />
                    </div>
                </div>
            </div>
            {
                <Messages/>
            }
        </GlobalContextProvider>
    );

}

export default App;