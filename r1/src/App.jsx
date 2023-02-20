'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.scss';
import BaseButton from './Components/011/Design/BaseButton';
import RedButton from './Components/011/Design/RedButton';
import Sq from './Components/011/Design/Sq';
import { withAdd, withClear } from './Components/011/HOCs/sq';
// import Circle from './Components/011/Circle';
// import Number from './Components/011/Number';

function App() {

    const [sq, setSq] = useState([]);

    const BaseButtonWithAdd = withAdd(BaseButton);
    const RedButtonWithClear = withClear(RedButton);

    return (
        <div className="App">
            <header className="App-header">
            {/* <Circle>
                <Number type="n1"/>
                <Number type="n2"/>
                <Number type="n3"/>
                <Number type="n4"/>
            </Circle> */}
                <div className="sq-bin">
                    {
                        sq.map((s, i) => s.show ? <Sq key={i} s={s} i={i} setSq={setSq} /> : null)
                    }
                </div>
                <div className="sq-bin">
                    <BaseButtonWithAdd title="add" setSq={setSq} />
                    <RedButtonWithClear title="clear" setSq={setSq} />
                </div>
                

            </header>
        </div>
    );

}

export default App;