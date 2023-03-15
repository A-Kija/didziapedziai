import { useEffect, useState } from 'react';
import axios from 'axios';
const URL = 'http://localhost:3003/users';


export const useWriteUsers = _ => {

    const [response, setResponse] = useState(null);
    const [destroy, setDelete] = useState(null);


    useEffect(() => {
        if (null === destroy) {
            return;
        }
        axios.delete(URL + '/' + destroy.id)
            .then(res => setResponse(res.data))
            .catch(error => setResponse(error))

    }, [destroy]);


    return [response, setDelete];

}