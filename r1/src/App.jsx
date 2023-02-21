'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.scss';

const select = [
    {text: 'Now', value: 'n'},
    {text: 'Today', value: 't'},
    {text: 'Tomorrow', value: 'tm'},
    {text: 'Next Week', value: 'nw'}
]

function App() {

    const [h1Wish, setH1Wish] = useState([]);

    const [wish, setWish] = useState('');
    const [when, setWhen] = useState('t');

    // const w = useRef();

    const showWish = () => {
        // setH1Wish(w.current.value);
        setH1Wish(w => [{wish, when}, ...w]);
        setWish('');
    }

    const wishControll = e => {
        setWish(e.target.value);
    }

    const whenControll = e => {
        setWhen(e.target.value);
    }

    

    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    {
                        h1Wish.map((w, i) => <div key={i}>{w.wish} {select.find(s => s.value === w.when ).text}</div>)
                    }
                </h1>
                <div className="input-bin red">
                    <label>Enter your Wish</label>
                    <input type="text" value={wish} onChange={wishControll} />

                    <label>When</label>
                    <select value={when} onChange={whenControll}>
                        {
                            select.map(s => <option key={s.value} value={s.value}>{s.text}</option>)
                        }
                    </select>

                    <button className="blue" onClick={showWish}>enter</button>
                </div>


            </header>
        </div>
    );

}

export default App;