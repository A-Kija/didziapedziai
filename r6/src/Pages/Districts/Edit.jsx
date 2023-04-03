import { useContext, useState } from "react"
import { actionsList, Store } from "../../store";

export default function Edit() {

    const { store, dispach } = useContext(Store);
    const [title, setTitle] = useState(store?.data?.title);
    

    const edit = _ => {
        dispach(actionsList['sections-edit']({title}, store?.data?.id));
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
                                <label className="form-label">Redaguoti sritį</label>
                                <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
                                <div id="emailHelp" className="form-text">Pakeiskite naujos viešosios srities pavadinimą</div>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={edit}>Keisti</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}