import { useState } from 'react';
import './App.scss';
import BoxLarge from './Components/018/BoxLarge';
import ContextData from './Components/018/ContextData';
import rand from './Functions/rand';


function App() {

    const [sq1, setSq1] = useState([]);
    const [sq2, setSq2] = useState([]);

    const addSq1 = _ => {
        setSq1(s => [ ...s, rand(100, 999)]);
    }

    const addSq2 = _ => {
        setSq2(s => [...s, rand(100, 999)]);
    }

    return (
        <ContextData.Provider value={sq2}>
            <div className="App">
                <header className="App-header">
                    <h1>conte-X-t</h1>


                    <BoxLarge sq1={sq1} />


                    <button className="coral" onClick={addSq1}>add</button>
                    <button className="blue" onClick={addSq2}>add</button>

                </header>
            </div>
        </ContextData.Provider>
    );

}

export default App;