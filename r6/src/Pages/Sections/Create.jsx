import { useContext, useState } from "react"
import { sectionsCreate } from "../../actions";
import { Store } from "../../store";

export default function Create() {

    const [title, setTitle] = useState('');
    const { dispach } = useContext(Store);

    const create = _ => {
        dispach(sectionsCreate(
            {
                title
            }
        ));
        setTitle('');
    }


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="card m-5">
                        <div className="card-header">
                            Sritis
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label">Nauja sritis</label>
                                <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
                                <div id="emailHelp" className="form-text">Pridėkite naujos viešosios srities pavadinimą</div>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={create}>Pridėti</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}