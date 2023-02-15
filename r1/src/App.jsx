import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.scss';
import AddButton from './Components/010/Buttons/AddButton';
import ClearButton from './Components/010/Buttons/ClearButton';
import ColorButton from './Components/010/Buttons/ColorButton';
import DefaultSortButton from './Components/010/Buttons/DefaultSortButton';
import Filter500Button from './Components/010/Buttons/Filter500Button';
import ShowAllButton from './Components/010/Buttons/ShowAllButton';
import SortButton from './Components/010/Buttons/SortButton';
import SpinAllButton from './Components/010/Buttons/SpinAllButton';
import StopSpinButton from './Components/010/Buttons/StopSpinButton';
import Sq from './Components/010/Sq';



function App() {

    const [sq, setSq] = useState([]);

    return (
        <div className="App">
            <header className="App-header">

                <div className="sq-bin">
                    {
                        sq.map((s, i) => s.show ? <Sq key={i} s={s} i={i} setSq={setSq} /> : null)
                    }
                </div>
                <div className="sq-bin">
                    <AddButton setSq={setSq} classes="blue" />
                    <ClearButton setSq={setSq} classes="red" />
                    <ColorButton setSq={setSq} classes="coral" />
                    <StopSpinButton setSq={setSq} classes="" />
                    <SpinAllButton setSq={setSq} classes="" />
                    <SortButton setSq={setSq} classes="blue" />
                    <DefaultSortButton setSq={setSq} classes="blue" />
                    <Filter500Button setSq={setSq} classes="red" />
                    <ShowAllButton setSq={setSq} classes="red" />
                </div>

            </header>
        </div>
    );

}

export default App;