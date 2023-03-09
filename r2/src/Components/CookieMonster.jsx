import { useState } from "react";
import axios from 'axios';

function CookieMonster() {

    const [text, setText] = useState('');

    const set = _ => {
        axios.post('http://localhost:3003/cookie', {text}, { withCredentials: true })
            .then(res => {
                console.log(res.data);
            });
    }

    const del = _ => {
        axios.post('http://localhost:3003/cookie', {delete: true}, { withCredentials: true })
            .then(res => {
                console.log(res.data);
            });
    }


    return (
        <div className="card mt-4">
            <div className="card-header">
                Cookies Manager
            </div>
            <div className="card-body">
                <h5 className="card-title">cookieMonster</h5>
                <div className="mb-3">
                    <label className="form-label">New Cookie Teaxt</label>
                    <input type="text" className="form-control" value={text} onChange={e => setText(e.target.value)} />
                </div>
                <button className="btn btn-primary m-1" onClick={set}>Set</button>
                <button className="btn btn-danger m-1" onClick={del}>Delete</button>
            </div>
        </div>
    )
}

export default CookieMonster;