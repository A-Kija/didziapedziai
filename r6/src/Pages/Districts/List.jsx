import { useContext } from 'react';
import { Store, actionsList } from '../../store';


export default function List() {

    const { store, dispach, imgUrl } = useContext(Store);


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-9">
                    <div className="card m-5">
                        <div className="card-header">
                            Rajonų sąrašas
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                {
                                    store?.data?.map(s => <li key={s.id} className="list-group-item">
                                        <div className="li-bin">
                                            <div className="li-bin-content">
                                                <span>{s.title}</span>
                                                <div className="li-bin-image">
                                                    {
                                                      s.photo ? <img src={imgUrl+s.photo} alt="nice"></img> : null
                                                    }
                                                </div>
                                            </div>
                                            <div className="li-bin-buttons">
                                                <button type="button" className="btn btn-info" onClick={_ => dispach(actionsList['districts-show-edit'](s.id))}>Redaguoti</button>
                                                <button type="button" className="btn btn-danger" onClick={_ => dispach(actionsList['districts-delete'](s.id))}>Ištrinti</button>
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