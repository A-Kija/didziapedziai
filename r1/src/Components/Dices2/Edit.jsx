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

function Edit({ setEditData, setEditModal, editModal}) {

    const [number, setNumber] = useState(editModal.number);
    const [size, setSize] = useState(editModal.size);
    const [color, setColor] = useState(editModal.color);

    const edit = _ => {
        setEditData(
            {
                number: parseInt(number),
                size: parseInt(size),
                color,
                id: editModal.id
            });
        setEditModal(null);
    }

    return (
        <>
            <div className="dice-edit-create edit">

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
                                <input type="checkbox" id={'e_' + c.v} checked={number === c.v} onChange={() => setNumber(c.v)} />
                                <label className="cb" htmlFor={'e_' + c.v}>{c.t}</label>
                            </span>)
                        }
                    </div>
                </div>
                <div className="bottom">
                    <label>{size}</label>
                    <div className="input-bin color">
                        <input type="color" value={color} onChange={e => setColor(e.target.value)} style={{ color: mutateColor(color) }} />
                    </div>
                    <button className="blue" onClick={edit}>save</button>
                    <button className="red" onClick={() => setEditModal(null)}>cancel</button>
                </div>
            </div>
        </>
    )
}

export default Edit;