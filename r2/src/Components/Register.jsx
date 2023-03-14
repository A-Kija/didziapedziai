import { useContext, useState } from "react";
import axios from 'axios';
import { Global } from "./Global";

function Register() {

    const [error, setError] = useState(null);
    const [name, setName] = useState('');
    const [psw, setPsw] = useState('');
    const [psw2, setPsw2] = useState('');

    // const {setLogged, setAuthName} = useContext(Global);

    const register = _ => {

        if (name.length < 3) {
            setError('Bad name');
            return;
        }
        if (psw.length < 3) {
            setError('Bad password');
            return;
        }
        if (psw !== psw2) {
            setError('Passwords missmatch');
            return;
        }

        axios.post('http://localhost:3003/register', { name, psw }, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                if (res.data.status === 'ok') {
                    setName('');
                    setPsw('');
                    setPsw2('');
                    setError(null);
                } else {
                    setError('Server error');
                }
            })
            .catch(error => {
                setError(error.response ? error.response.statusText : error.code
                );
            })
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-5">
                    <div className="card mt-4">
                        <div className="card-header">
                            {
                                error ? <span style={{ color: 'crimson' }}>{error}</span> : <span>Register</span>
                            }
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" value={psw} onChange={e => setPsw(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password Repeat</label>
                                <input type="password" className="form-control" value={psw2} onChange={e => setPsw2(e.target.value)} />
                            </div>
                            <button className="btn btn-primary m-1" onClick={register}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;