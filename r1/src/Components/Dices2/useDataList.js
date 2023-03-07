import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3003/dices';


export const useDataList = init => {

    const [list, setList] = useState(init);
    const [lastUpdate, setLastUpdate] = useState(Date.now());

    // const update = _ => {
    //     setLastUpdate(Date.now());
    // }

    useEffect(() => {
        axios.get(URL)
            .then(res => {
                setList(res.data);
            });
    }, [lastUpdate]);

    return [list, setLastUpdate];
}