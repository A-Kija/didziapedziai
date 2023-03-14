import { useEffect, useState } from 'react';
import axios from 'axios';
const URL = 'http://localhost:3003/users';


export const useReadUsers = _ => {

    const [list, setList] = useState(null);
    const [update, setUpdate] = useState(null);

    useEffect(() => {
        if (null === update) {
            return;
        }
        axios.get(URL)
            .then(res => setList(res.data));
    }, [update]);


    return [list, setUpdate];

}