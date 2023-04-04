import { useContext, useEffect, useState } from "react"
import { actionsList, Store } from "../../store";
import { useFile } from "../../Use/useFile";

export default function Edit() {

    const { store, dispach, imgUrl } = useContext(Store);
    const [file, readFile, remImage] = useFile();
    const [delImg, setDelImg] = useState(false);

    const [title, setTitle] = useState('');
    const [photo, setPhoto] = useState(null);



    useEffect(() => {
        if (null === store) {
            return;
        }
        setTitle(store.data.title);
        setPhoto(store.data.photo);
    }, [])



    const edit = _ => {
        dispach(actionsList['districts-edit'](
            {
                title,
                file,
                delImg
            },
            store.data.id
        )
        );
    }

    const delImage = _ => {
        setDelImg(true);
    }

    const cancelImage = _ => {
        remImage();
        setDelImg(false);
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="card m-5">
                        <div className="card-header">
                            Rajonas
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label">Redaguoti rajoną</label>
                                <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
                                <div className="form-text">Pakeiskite rajono pavadinimą</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formFileE" className="form-label">Rajono herbas</label>
                                <input className="form-control form-control-sm" id="formFileE" type="file" onChange={readFile} />
                            </div>
                            <div>
                                {
                                    file
                                        ? <img className="upload-image mb-3" src={file} alt="to upload" />
                                        : (
                                            photo && !delImg
                                                ? <img className="upload-image" src={imgUrl + photo} />
                                                : <img className="upload-image" src={imgUrl + 'no.gif'} />
                                        )
                                }

                            </div>
                            <button className="m-1 btn btn-danger" onClick={delImage}>Ištrinti</button>
                            <button className="m-1 btn btn-warning" onClick={cancelImage}>Atšaukti</button>
                            <button type="button" className="btn btn-primary" onClick={edit}>Keisti</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

