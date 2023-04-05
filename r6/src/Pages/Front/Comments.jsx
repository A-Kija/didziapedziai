import { useContext } from 'react';
import Link from '../../Componets/Link';
import { Store } from '../../store';
import '../../styles/list.scss';

export default function Comments() {

    const { store, imgUrl } = useContext(Store);


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="card m-5">
                        <div className="card-header">
                            <h1 className="list-title">Pasiūlymų sąrašas</h1>
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                {
                                    store?.data?.map(c => c.type === 'comment' ? <li key={c.id} className="list-group-item">
                                        <div className="list-bin">
                                            <div className="list-comments">
                                                {c.data}
                                            </div>
                                        </div>
                                    </li> : null)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}