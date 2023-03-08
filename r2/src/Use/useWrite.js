import { useEffect, useState } from 'react';
import axios from 'axios';
const URL = 'http://localhost:3003/numbers';


export const useWrite = _ => {

    const [response, setResponse] = useState(null);
    const [create, setCreate] = useState(null);
    const [destroy, setDelete] = useState(null);
    const [edit, setEdit] = useState(null);

    useEffect(() => {
        if (null === edit) {
            return;
        }
        axios.put(URL + '/' + edit.action + '/' + edit.id, { number: edit.number })
            .then(res => setResponse(res.data));

    }, [edit]);

    useEffect(() => {
        if (null === create) {
            return;
        }
        axios.post(URL, create)
            .then(res => setResponse(res.data));

    }, [create]);

    useEffect(() => {
        if (null === destroy) {
            return;
        }
        axios.delete(URL + '/' + destroy.id)
            .then(res => setResponse(res.data));

    }, [destroy]);


    return [response, setCreate, setEdit, setDelete];

}