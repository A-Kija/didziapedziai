import { useContext } from 'react';
import { Global } from './Global';

function List() {

    const { list, setDeleteModal, setAddModal , setRemModal} = useContext(Global);


    return (
        <div className="card mt-4">
            <div className="card-header">
                Your selected lucy numbers
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {
                        list?.map(n => (<li key={n.id} className="list-group-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <h2>{n.number}</h2>
                                    </div>
                                    <div className="col-2">
                                        <button type="button" className="btn btn-primary" onClick={() => setAddModal(n)}>ADD</button>
                                    </div>
                                    <div className="col-2">
                                        <button type="button" className="btn btn-primary" onClick={() => setRemModal(n)}>REM</button>
                                    </div>
                                    <div className="col-2">
                                        <button type="button" className="btn btn-danger" onClick={() => setDeleteModal(n)}>DELETE</button>
                                    </div>
                                </div>
                            </div>


                        </li>))
                    }


                </ul>

                {/* <button className="btn btn-primary" onClick={add}>Add</button> */}
            </div>
        </div>
    )
}

export default List;