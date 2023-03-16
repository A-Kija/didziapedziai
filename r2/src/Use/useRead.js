import { useEffect, useState } from 'react';
import axios from 'axios';
const URL = 'http://localhost:3003/numbers';


export const useRead = _ => {

    const [list, setList] = useState(null);
    const [update, setUpdate] = useState(null);

    useEffect(() => {
        if (null === update) {
            return;
        }
        axios.get(URL, { withCredentials: true })
            .then(res => setList(res.data));
    }, [update]);


    return [list, setUpdate];

}