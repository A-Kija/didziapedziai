import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3003/dices';

export const useDataEdit = init => {

    const [response, setResponse] = useState(null);
    const [data, setData] = useState(init);

    useEffect(() => {
        if (null === data) {
            return;
        }
        axios.put(URL + '/' + data.id, data)
            .then(res => {
                setResponse(res.data);
            });
    }, [data]);

    return [response, setData];
}