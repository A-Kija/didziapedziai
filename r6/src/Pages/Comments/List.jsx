import { useContext } from 'react';
import { Store, actionsList } from '../../store';


export default function List() {

    const { store, dispach} = useContext(Store);


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-9">
                    <div className="card m-5">
                        <div className="card-header">
                            Visi pasiūlymai
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                {
                                    store?.data?.map(s => <li key={s.id} className="list-group-item">
                                        <div className="list-bin">
                                            <div className="list-comment">
                                            <div className="where">
                                                    <span>{s.district}</span>
                                                    <span>{s.section}</span>
                                                </div>
                                                <div className="comment">
                                                    {s.comment}
                                                </div>

                                            </div>
                                            <div className="li-bin-buttons">
                                                <button type="button" className="btn btn-info">Redaguoti</button>
                                                <button type="button" className="btn btn-danger">Ištrinti</button>
                                            </div>
                                        </div>
                                    </li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}