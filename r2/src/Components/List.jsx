import { useContext } from 'react';
import { Global } from './Global';

function List() {

    const { list } = useContext(Global);


    return (
        <div className="card mt-4">
            <div className="card-header">
            Your selected lucy numbers
            </div>
            <div className="card-body">
            <ul className="list-group">
                {
                    list?.map(n => (<li key={n.id} className="list-group-item">
                        {n.number}
                        </li>))
                }
                

            </ul>

                {/* <button className="btn btn-primary" onClick={add}>Add</button> */}
            </div>
        </div>
    )
}

export default List;