import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.scss';
import AnimalLi from './Components/008/AnimalLi';
import Click from './Components/008/Click';

const data = [
    { id: 1, animal: 'Racoon', color: 'crimson', bold: true },
    { id: 4, animal: 'Fox', color: 'brown', bold: true },
    { id: 17, animal: 'Beaver', color: 'skyblue', bold: false },
    { id: 3, animal: 'Unicorn', color: 'coral', bold: true }
];

function App() {

    // const stateValue = useState('start value')[0];
    // const functionToChangeState = useState('start value')[1];

    const [stateValue, functionToChangeState] = useState('start value');

    // stateValue = 'next value';
    functionToChangeState('next value'); // => stateValue = 'next value'

    const arr = ['red', 'blue'];

    // const red = arr[0];
    // const blue = arr[1];

    const [red, blue] = arr;


    return (
        <div className="App">
            <header className="App-header">

            <Click/>

                <div className="card">
                    <div className="card-header">
                        <h2>Animals List</h2>
                    </div>

                    

                    <ul className="list-group list-group-flush">
                        {
                            data.map((a, i) => <AnimalLi key={a.id} animal={a} index={i} />)
                        }
                    </ul>
                </div>


            </header>
        </div>
    );

}

export default App;