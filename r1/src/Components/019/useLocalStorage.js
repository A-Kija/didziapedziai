import { useEffect, useState } from "react"


export const useLocalStorage = (init, lsKey) => {

    const [value, setValue] = useState(() => {
        const data = localStorage.getItem(lsKey);
        return null === data ? init : JSON.parse(data);
    });

    useEffect(() => {
        localStorage.setItem(lsKey, JSON.stringify(value));
    }, [value, lsKey]);

    return [value, setValue];
}