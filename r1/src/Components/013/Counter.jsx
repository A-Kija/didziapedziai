import { useEffect, useRef, useState } from 'react';
import Fenix from './Fenix';


function Counter() {

    // console.log('Counter function');

    const a = useRef(1);
    // const start = useRef(false);

    const [count, setCount] = useState(10);
    const [starts, setStarts] = useState('');

    // const fun = _ => {
        
    // }


    // useEffect(() => {
    //     if (start.current) {
    //         console.log('count changed')
    //     } else {
    //         start.current = true;
    //     }
    // }, [count]);

    useEffect(() => {
        setStarts(''.padStart(count, '*'));
    }, [count]);

    // useEffect(() => {
    //     console.log('FUN');
    //     fun();
    // }, []);

    const add = _ => {
        setCount(c => c + 1);
        // setStarts(''.padStart(count, '*'));
    }

    const rem = _ => {
        setCount(c => c - 1);
        // setStarts(''.padStart(count, '*'));
    }

    const addToVar = _ => {
        console.log(++a.current);
    }


    return (
        <>
        <h1>{count}</h1>
        <h2>{starts}</h2>
        {
            count > 15 ? <Fenix/> : null
        }


        <div className="sq-bin">
            <button className="blue" onClick={add}>+1</button>
            <button className="red" onClick={rem}>-1</button>
            <button className="coral" onClick={addToVar}>+1</button>
        </div>
        </>
    )
}

export default Counter;