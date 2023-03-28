export default function Create() {

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
                                <input type="text" className="form-control" />
                                <div id="emailHelp" className="form-text">Pridėkite naujos viešosios srities pavadinimą</div>
                            </div>
                            <button type="button" className="btn btn-primary">Pridėti</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}