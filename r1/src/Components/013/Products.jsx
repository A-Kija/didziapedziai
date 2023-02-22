import { useEffect, useState } from 'react';
import axios from 'axios';

function Products() {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setUsers(res.data.map((u, i) => ({...u, row: i})));
            });
    }, []);

    const sort = _ => {
        setUsers(u => [...u].sort((a, b) => a.name.localeCompare(b.name)));
    }

    const sortDefault = _ => {
        setUsers(u => [...u].sort((a, b) => a.row - b.row));
    }

    return (
        <div className="card">
            <div className="card-header">
                <h2>Users List</h2>
            </div>

            <ul className="list-group list-group-flush">
                {
                    users === null ? <li className="list-group-item">Loading...</li>
                    : users.map(u => <li className="list-group-item" key={u.id}>{u.name}</li>)
                }
            </ul>
            <button className="blue" onClick={sort}>sort</button>
            <button className="blue" onClick={sortDefault}>sort default</button>
        </div>
    );

}

export default Products;