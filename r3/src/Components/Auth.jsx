import { useContext, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';
import Login from './Login';
import { Global } from './Global';

function Auth({ children }) {

    const { setAuthName, logged, setLogged } = useContext(Global);


    useEffect(() => {
        axios.get('http://localhost:3003/login', { withCredentials: true })
            .then(res => {
                if (res.data.status === 'ok') {
                    setAuthName(res.data.name);
                    setLogged(1);
                } else {
                    setAuthName(null);
                    setLogged(2);
                }
            })
            .catch(_ => {
                setAuthName(null);
                setLogged(2);
            })
    }, [setLogged, setAuthName]);


    if (null === logged) {
        return <Loader />
    }

    if (1 === logged) {
        return (
            <>
                {children}
            </>
        )
    }
    if (2 === logged) {
        console.log(2)
        return (
            <Login />
        )
    }
}

export default Auth;