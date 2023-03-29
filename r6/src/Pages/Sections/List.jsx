import { useContext } from "react"
import { Store } from "../../store"

export default function List() {

    const { store } = useContext(Store);


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-9">
                    <div className="card m-5">
                        <div className="card-header">
                            Sričių sąrašas
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                {
                                    store?.data?.map(s => <li key={s.id} className="list-group-item">{s.title}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}