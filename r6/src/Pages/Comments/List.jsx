import { useContext } from 'react';
import { Store, actionsList } from '../../store';


export default function List() {

    const { store, dispach } = useContext(Store);

    const showHide = id => {
        dispach(actionsList['comment-show-hide'](id));
    }

    const remove = id => {
        dispach(actionsList['comment-delete'](id));
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
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
                                                <div className="comment" style={{
                                                    color: !s.show_it ? 'lightgrey' : null
                                                }}>
                                                    {s.comment}
                                                </div>

                                            </div>
                                            <div className="comments-buttons">
                                                <button type="button" className="btn btn-info" onClick={_ => showHide(s.id)}>
                                                    {s.show_it ? 'Paslėpti' : 'Patvirtinti' }
                                                </button>
                                                <button type="button" className="btn btn-danger" onClick={_ => remove(s.id)}>Ištrinti</button>
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