import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useMessages = init => {

    const [messages, setMessages] = useState(init);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (null === message) {
            return;
        }
        const uuid = uuidv4();
        setMessages(m => [...m, {...message, id: uuid }]);
        setTimeout(() => {
            setMessages(m => m.filter(m => uuid !== m.id));
        }, 5000);

    }, [message]);

    return [messages, setMessage];
}