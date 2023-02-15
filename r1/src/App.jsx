import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.scss';
import AddButton from './Components/010/Buttons/AddButton';
import ClearButton from './Components/010/Buttons/ClearButton';
import ColorButton from './Components/010/Buttons/ColorButton';
import Sq from './Components/010/Sq';



function App() {

    const [sq, setSq] = useState([]);

    return (
        <div className="App">
            <header className="App-header">

                <div className="sq-bin">
                    {
                        sq.map((s, i) => <Sq key={i} s={s} i={i} setSq={setSq} />)
                    }
                </div>
                <div className="sq-bin">
                    <AddButton setSq={setSq} classes="blue" />
                    <ClearButton setSq={setSq} classes="red" />
                    <ColorButton setSq={setSq} classes="coral" />
                </div>

            </header>
        </div>
    );

}

export default App;