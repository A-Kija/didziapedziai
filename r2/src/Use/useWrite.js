import { useEffect, useState } from 'react';
import axios from 'axios';
const URL = 'http://localhost:3003/numbers';


export const useWrite = _ => {

    const [response, setResponse] = useState(null);
    const [create, setCreate] = useState(null);

    useEffect(() => {
        axios.post(URL, create)
            .then(res => setResponse(res.data));

    }, [create]);


    return [response, setCreate];

}