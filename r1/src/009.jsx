import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.scss';
import randColor from './Functions/randColor';
// import Sq from './Components/009/Sq';

function App() {

    // const [sqColor, setSqColor] = useState('crimson');
    // const [count, setCount] = useState(0);

    // const changeColor = () => {
    //     // sqColor = 'skyblue'; negalima
    //     setSqColor('skyblue'); // naujos reiksmes priskyrimas
    // }

    // const changeColor2 = () => {

    //     setSqColor(c => 'crimson' === c ? 'skyblue' : 'crimson')
    // }

    // const addOne = () => {
    //     // setCount(count++); // mirstat iskart
    //     // setCount(count + 1); // ispejimas taip negalima
    //     // setCount(count + 1); // reiksmes redagavimas
    //     // setCount(c => c + 1);
    //     // setCount(c => c + 1);
    //     setCount(c => c + 1);
    // }

    const [sq, setSq] = useState([]);

    const addSq = () => {
        // setSq(sq.push(1)); NEGALIMA
        setSq(s => [...s, { id: uuidv4(), color: randColor() }]);
    }

    const delSq = id => {
        setSq(s => s.filter(s => s.id !== id));
    }

    const cloneSq = id => {
        const clone = sq.find(s => s.id === id);
        setSq(s => [...s, {...clone, id: uuidv4()}])
    }

    const clearSq = () => {
        setSq([]);
    }

    const changeColors = () => {
        setSq(s => s.map(s => ({...s, color: randColor()})));
    }


    return (
        <div className="App">
            <header className="App-header">

                {/* <div className="sq-bin">
                    <div className="sq" style={{backgroundColor: sqColor}}>
                    </div>
                    <div className="sq">
                        {count}
                    </div>
                </div>
                <button className="blue" onClick={changeColor}>Make Blue</button>
                <button className="blue" onClick={changeColor2}>change 2</button>
                <button className="red" onClick={addOne}>+1</button> */}
                <div className="sq-bin">
                    {/* {
                        sq.map((s, i) => <Sq key={i} s={s} i={i}/>)
                    } */}

                    {
                        sq.map((s, i) =>
                            <div key={i} className="sq spin" style={{
                                backgroundColor: s.color + '70',
                                borderColor: s.color,
                            }}>
                                <div className="spin-back">
                                <button className="small red" onClick={() => delSq(s.id)}>del</button>
                                <button className="small blue" onClick={() => cloneSq(s.id)}>clone</button>
                                </div>
                            </div>
                    )}
                </div>
                <div className="sq-bin">
                <button className="coral" onClick={addSq}>+[]</button>
                <button className="red" onClick={clearSq}>clear</button>
                <button className="red" onClick={changeColors}>new</button>
                </div>

            </header>
        </div>
    );

}

export default App;