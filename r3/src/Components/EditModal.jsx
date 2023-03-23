import { useContext, useEffect, useState } from 'react';
import { Global } from './Global';
import { useFile } from '../Use/useFile';
const IMG = 'http://localhost:3003/img/';


function EditModal() {


    const [file, readFile, remImage] = useFile();
    const [delImg, setDelImg] = useState(false);

    const { editModalTree, setEditModalTree, setEditTree, types } = useContext(Global);
    const [input, setInput] = useState({
        title: '',
        height: 0,
        type: 1
    });

    const delImage = _  => {
        setDelImg(true);
    }

    useEffect(() => {

        console.log(editModalTree);

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
        setInput(i => ({ ...i, [e.nativeEvent.target.getAttribute('name')]: e.target.value }));
    }

    const cancelImage = _ => {
        remImage();
        setDelImg(false);
    }

    const modalClose = _ => {
        setEditModalTree(null);
        remImage();
        setDelImg(false);
    }

    const edit = _ => {
        setEditTree({
            id: editModalTree.id,
            title: input.title,
            height: parseInt(input.height) / 100,
            type: parseInt(input.type),
            file,
            delImg
        });
        modalClose();
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
                        <button type="button" className="btn-close" onClick={modalClose}></button>
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
                                <div className="mb-3">
                                    <label htmlFor="formFileE" className="form-label">Tree image</label>
                                    <input className="form-control form-control-sm" id="formFileE" type="file" onChange={readFile} />
                                </div>
                                <div>
                                    {
                                        file
                                            ? <img className="upload-image mb-3" src={file} alt="to upload" />
                                            : (
                                                editModalTree.image && !delImg
                                                    ? <img className="list-image" src={IMG + editModalTree.image} />
                                                    : <img className="list-image" src={IMG + 'no.gif'} />
                                            )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="m-1 btn btn-danger" onClick={delImage}>Delete Image</button>
                        <button className="m-1 btn btn-warning" onClick={cancelImage}>Cancel</button>
                        <button className="btn btn-primary" onClick={edit}>rePLANT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditModal;