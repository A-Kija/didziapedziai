import { useContext } from 'react';
import { Global } from './Global';

function List() {

    const { trees } = useContext(Global);


    return (
        <div className="card mt-4">
            <div className="card-header">
                <h2>Big Forest</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {
                        trees?.map(t => (<li key={t.id} className="list-group-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-8">
                                        <h2>{t.title}</h2>
                                    </div>
                                    <div className="col-2">
                                        <button type="button" className="btn btn-primary">PLANT</button>
                                    </div>
                                    <div className="col-2">
                                        <button type="button" className="btn btn-primary">CUT</button>
                                    </div>
                                </div>
                            </div>
                        </li>))
                    }
                </ul>
            </div>
        </div>
    );
}
export default List;