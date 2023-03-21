import { useContext, useEffect, useState } from 'react';
import { Global } from './Global';

function EditModal() {

    const { editModalTree, setEditModalTree, setEditTree, types } = useContext(Global);
    const [input, setInput] = useState({
        title: '',
        height: 0,
        type: 1
    });

    useEffect(() => {
        if (null === editModalTree) {
            return;
        }
        setInput({
            title: editModalTree.title,
            height: editModalTree.height * 100,
            type: editModalTree.type
        })
    }, [editModalTree]);


    const handleClick = e => {
        setInput(i => ({...i, [e.nativeEvent.target.getAttribute('name')]:e.target.value}));
    }

    const edit = _ => {
        setEditTree({
            id: editModalTree.id,
            title: input.title,
            height: parseInt(input.height) / 100,
            type: parseInt(input.type)
        });
        setEditModalTree(null);
    }

    if (null === editModalTree) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Please RE-plant this tree</h5>
                        <button type="button" className="btn-close" onClick={() => setEditModalTree(null)}></button>
                    </div>
                    <div className="modal-body">
                        <div className="card mt-4">
                            <div className="card-body">

                                <div className="mb-3">
                                    <label className="form-label">Tree</label>
                                    <input type="text" className="form-control" name="title"
                                        value={input.title} onChange={handleClick} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Slide to height: {input.height / 100} m</label>
                                    <input type="range" min="0" max="9999" className="form-range" name="height"
                                        value={input.height} onChange={handleClick} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Tree type</label>
                                    <select className="form-select" value={input.type} onChange={handleClick} name="type">
                                        {
                                            types.map(t => <option key={t.type} value={t.type}>{t.typeTitle}</option>)
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary" onClick={edit}>rePLANT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditModal;