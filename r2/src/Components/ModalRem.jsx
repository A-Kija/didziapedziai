import { useContext, useEffect, useState } from 'react';
import { Global } from './Global';

function ModalRem() {

    const { remModal, setRemModal, setEdit } = useContext(Global);
    const [number, setNumber] = useState(0);

    useEffect(() => {
        if (null === remModal) {
            return;
        }
        setNumber(0);
    }, [remModal]);

    const rem = _ => {
        setEdit({
            number: parseInt(number),
            id: remModal.id,
            action: 'rem'
        });
        setRemModal(null);
    }

    if (null === remModal) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add to number {remModal.number}</h5>
                        <button type="button" className="btn-close" onClick={() => setRemModal(null)}></button>
                    </div>
                    <div className="modal-body">
                    <div className="mb-3">
                    <label className="form-label">Slide to add {number}</label>
                    <input type="range" min="0" max={remModal.number - 1} className="form-range"
                    value={number} onChange={e => setNumber(e.target.value)} />
                </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => setRemModal(null)}>Cancel</button>
                        <button type="button" className="btn btn-primary" onClick={rem}>REMOVE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalRem;