import { useContext } from 'react';
import { Global } from './Global';

function ModalDelete() {

    const { deleteModal, setDeleteModal, setDelete } = useContext(Global);

    const del = _ => {
        setDelete(deleteModal);
        setDeleteModal(null);
    }

    if (null === deleteModal) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirm</h5>
                        <button type="button" className="btn-close" onClick={() => setDeleteModal(null)}></button>
                    </div>
                    <div className="modal-body">
                        <p>Do you really want to delete that number.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => setDeleteModal(null)}>Cancel</button>
                        <button type="button" className="btn btn-primary" onClick={del}>OK</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalDelete;