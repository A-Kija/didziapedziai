import { useEffect, useState } from "react"

export const useAdd23 = init => {

    const [value, setValue] = useState(init);
    const [status, setStatus] = useState(true);

    useEffect(() => {
        setValue(v => v + 23);
    }, [status]);

    return [value, setStatus];
}