import { useContext } from 'react';
import Link from '../../Componets/Link';
import { Store } from '../../store';
import '../../styles/list.scss';

export default function List() {

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
                                    store?.data?.map(d => d.type === 'district' ? <li key={d.id} className="list-group-item">
                                        <div className="list-bin">
                                            <div className="list-district">
                                                <span>{d.title}</span>
                                                <div className="list-image">
                                                    {
                                                        d.photo ? <img src={imgUrl + d.photo} alt="nice"></img> : null
                                                    }
                                                </div>
                                            </div>
                                            <div className="list-section">
                                                <ul className="list-group list-group-flush">
                                                    {
                                                        store?.data?.map(s => s.type === 'section' ? <li key={s.id} className="list-group-item">
                                                            <div className="li-bin-content">
                                                                <Link action="district-section"data={[d.id, s.id]} > <span>{s.title}</span></Link>
                                                            </div>
                                                        </li> : null)
                                                    }

                                                </ul>
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