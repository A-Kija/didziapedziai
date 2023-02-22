'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.scss';

const select = [
    { text: 'Now', value: 'n' },
    { text: 'Today', value: 't' },
    { text: 'Tomorrow', value: 'tm' },
    { text: 'Next Week', value: 'nw' }
];
const checkbox = [
    { text: 'With Box', value: 'b' },
    { text: 'Nice Color', value: 'c' },
    { text: 'Parfumed', value: 'p' },
    { text: 'Add Card', value: 'ac' }
];

const radio = [
    { text: 'VISA', value: 'v' },
    { text: 'Master Card', value: 'mc' },
    { text: 'PayPal', value: 'p' },
    { text: 'Cash', value: 'c' }
]

function App() {

    const [h1Wish, setH1Wish] = useState([]);

    const [wish, setWish] = useState('');
    const [when, setWhen] = useState('t');
    const [extras, setExtras] = useState({b:false, c:true, p:false, ac:false});
    const [payment, setPayment] = useState(null)

    // const w = useRef();

    const showWish = () => {
        // setH1Wish(w.current.value);
        setH1Wish(w => [{ wish, when }, ...w]);
        setWish('');
    }

    const wishControll = e => {
        setWish(e.target.value);
    }

    const whenControll = e => {
        setWhen(e.target.value);
    }

    const extrasControll = v => {
        setExtras(e => ({...e, [v]: !e[v]}));
    }

    const paymentControll = v => {
        setPayment(v)
    }



    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    {
                        h1Wish.map((w, i) => <div key={i}>{w.wish} {select.find(s => s.value === w.when).text}</div>)
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

                    <label>Extras</label>
                    <div className="cb-bin">
                        {
                            checkbox.map(c => <span key={c.value}>
                                <input type="checkbox" id={'cb_'+c.value} checked={extras[c.value]} onChange={() => extrasControll(c.value)}/>
                                <label className="cb" htmlFor={'cb_'+c.value}>{c.text}</label>
                            </span>)
                        }
                    </div>

                    <label>Payment</label>
                    <div className="cb-bin">
                        {
                            radio.map(c => <span key={c.value}>
                                <input type="checkbox" id={'r_'+c.value} checked={payment===c.value} onChange={() => paymentControll(c.value)}/>
                                <label className="cb" htmlFor={'r_'+c.value}>{c.text}</label>
                            </span>)
                        }
                    </div>

                    <button className="blue" onClick={showWish}>enter</button>
                </div>


            </header>
        </div>
    );

}

export default App;