import { useContext } from 'react';
import { useState } from 'react';
import { Global } from './Global';

function Create() {

    const [number, setNumber] = useState(1);
    const {setCreate} = useContext(Global);

    const add = _ => {
        setCreate({
            number: parseInt(number)
        });
        setNumber(1);
    }

    return (
        <div className="card mt-4">
            <div className="card-header">
            Please select your lucy number
            </div>
            <div className="card-body">
                <h5 className="card-title">Your number is: {number}</h5>
                <div className="mb-3">
                    <label className="form-label">Slide your number</label>
                    <input type="range" min="1" max="99" className="form-range"
                    value={number} onChange={e => setNumber(e.target.value)} />
                </div>
                <button className="btn btn-primary" onClick={add}>Add</button>
            </div>
        </div>
    )
}

export default Create;