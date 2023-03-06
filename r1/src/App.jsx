import { useState } from 'react';
import './App.scss';
import { useAdd23 } from './Components/019/useAdd23';
import { useLocalStorage } from './Components/019/useLocalStorage';
import { useSimpleState } from './Components/019/useSimpleState';


function App() {

    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useSimpleState(10);
    const [count3, setCount3] = useLocalStorage(24, 'couter123');
    const [count4, setCount4] = useAdd23(42);


    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    <span style={{ color: 'crimson', padding: '10px' }}>{count1}</span>
                    <span style={{ color: 'skyblue', padding: '10px' }}>{count2}</span>
                    <span style={{ color: 'coral', padding: '10px' }}>{count3}</span>
                    <span style={{ color: 'crimson', padding: '10px' }}>{count4}</span>
                </h1>

                <div className="sq-bin">
                    <button className="red" onClick={() => setCount1(c => c + 1)}>+1</button>
                    <button className="blue" onClick={() => setCount2(c => c + 11)}>+11</button>
                    <button className="coral" onClick={() => setCount3(c => c - 7)}>-7</button>
                    <button className="red" onClick={() => setCount4(c => !c)}>+23</button>
                </div>
            </header>
        </div>
    );

}

export default App;