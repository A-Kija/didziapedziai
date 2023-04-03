import '../../styles/districts.scss';
import { useContext, useState } from "react"
import { sectionsCreate } from "../../actions";
import { actionsList, Store } from "../../store";
import { useFile } from "../../Use/useFile";

export default function Create() {

    const [title, setTitle] = useState('');
    const { dispach } = useContext(Store);
    const [file, readFile, remImage] = useFile();

    const create = _ => {
        dispach(actionsList['districts-create']({
            title,
            file
        }));
        setTitle('');
        remImage();
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
                                <label className="form-label">Naujas rajonas</label>
                                <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
                                <div className="form-text">Pridėkite naujo rajono pavadinimą</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Rajono herbas</label>
                                <input className="form-control form-control-sm" id="formFile" type="file" onChange={readFile} />
                                <div className="form-text">Pridėkite naujo rajono herbo paveikslėlį</div>
                            </div>
                            <div>
                                {
                                    file
                                        ? <img className="upload-image mb-3" src={file} alt="to upload" />
                                        : null
                                }

                            </div>

                            <button className="m-1 btn btn-danger" onClick={remImage}>Ištrinti paveikslėlį</button>
                            <button type="button" className="btn btn-primary" onClick={create}>Pridėti</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}