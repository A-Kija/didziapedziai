import { useState } from 'react';
import Buttons from "./Buttons";
import Show from "./Show";

function Count() {

    const [count, setCount] = useState(1);

    return (
        <>
            <Show count={count}/>
            <Buttons setCount={setCount} />
        </>
    )
}

export default Count;