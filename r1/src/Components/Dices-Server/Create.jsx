import { useState } from 'react';
import mutateColor from '../../Functions/mutateColor'

const dicesCb = [
    { v: 1, t: 'One' },
    { v: 2, t: 'Two' },
    { v: 3, t: 'Three' },
    { v: 4, t: 'Four' },
    { v: 5, t: 'Five' },
    { v: 6, t: 'Six' }
];


function Create({ setCreateData }) {

    const [number, setNumber] = useState(1);
    const [size, setSize] = useState(100);
    const [color, setColor] = useState('#ffffff');

    const create = _ => {
        setCreateData(
            {
                number: parseInt(number),
                size: parseInt(size),
                color
            });
        setNumber(1);
        setSize(100);
        setColor('#ffffff');
    }

    return (
        <>
            <div className="title">
                Create
            </div>
            <div className="dice-edit-create create">

                <div className="top">
                    <div className="rotate">
                        <div className="input-bin range">
                            <input type="range" min="100" max="200" value={size} onChange={e => setSize(e.target.value)} />
                        </div>
                    </div>
                    <div className="dice-bin">
                        <div className="dice-frame">
                            <div className={'dice _' + number} style={{
                                fontSize: size + 'px',
                                color
                            }}></div>
                        </div>
                    </div>
                    <div className="cb-bin">
                        {
                            dicesCb.map(c => <span key={c.v}>
                                <input type="checkbox" id={'r_' + c.v} checked={number === c.v} onChange={() => setNumber(c.v)} />
                                <label className="cb" htmlFor={'r_' + c.v}>{c.t}</label>
                            </span>)
                        }
                    </div>
                </div>
                <div className="bottom">
                    <label>{size}</label>
                    <div className="input-bin color">
                        <input type="color" value={color} onChange={e => setColor(e.target.value)} style={{ color: mutateColor(color) }} />
                    </div>
                    <button className="blue" onClick={create}>add</button>
                </div>
            </div>
        </>
    )
}

export default Create;