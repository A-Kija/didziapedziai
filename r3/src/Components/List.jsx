import { useContext } from 'react';
import { Global } from './Global';
const IMG = 'http://localhost:3003/img/';

function List() {

    const { trees, setDeleteTree, setEditModalTree } = useContext(Global);

    // console.log(trees);

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
                                    <div className="col-4">
                                        <h2>{t.title}</h2>
                                    </div>
                                    <div className="col-2">
                                        <div>{t.height} m</div>
                                    </div>
                                    <div className="col-2">
                                        <i>{t.type}</i>
                                    </div>
                                    <div className="col-2">
                                        <button type="button" className="btn btn-primary" onClick={() => setEditModalTree(t)}>rePLANT</button>
                                    </div>
                                    <div className="col-2">
                                        <button type="button" className="btn btn-primary" onClick={() => setDeleteTree(t)}>CUT</button>
                                    </div>
                                    <div className="col-4">
                                        {
                                            t.image
                                            ? <img className="list-image" src={IMG + t.image} />
                                            : <img className="list-image" src={IMG + 'no.gif'} />
                                        }
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