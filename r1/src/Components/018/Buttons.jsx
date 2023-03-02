import { useContext } from 'react';
import rand from '../../Functions/rand';
import { GlobalSqContext } from './GlobalSqContext';

function Buttons() {
    

    const { setSq1, setSq2 } = useContext(GlobalSqContext)

    return (
        <>
            <button className="coral" onClick={() => setSq1(s => [...s, rand(100, 999)])}>add</button>
            <button className="blue" onClick={() => setSq2(s => [...s, rand(100, 999)])}>add</button>
        </>
    )
}

export default Buttons;