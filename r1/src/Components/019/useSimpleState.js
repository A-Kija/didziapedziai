import { useState } from 'react';


export const useSimpleState = init => {
    const [value, setValue] = useState(init);

    return [value, setValue];
}