import { useContext, useEffect, useState } from 'react';
import { Global } from './Global';

function ModalAdd() {

    const { addModal, setAddModal, setEdit } = useContext(Global);
    const [number, setNumber] = useState(0);

    useEffect(() => {
        if (null === addModal) {
            return;
        }
        setNumber(0);
    }, [addModal]);

    const add = _ => {
        setEdit({
            number: parseInt(number),
            id: addModal.id,
            action: 'add'
        });
        setAddModal(null);
    }

    if (null === addModal) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add to number {addModal.number}</h5>
                        <button type="button" className="btn-close" onClick={() => setAddModal(null)}></button>
                    </div>
                    <div className="modal-body">
                    <div className="mb-3">
                    <label className="form-label">Slide to add {number}</label>
                    <input type="range" min="0" max={99 - addModal.number} className="form-range"
                    value={number} onChange={e => setNumber(e.target.value)} />
                </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => setAddModal(null)}>Cancel</button>
                        <button type="button" className="btn btn-primary" onClick={add}>ADD</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalAdd;