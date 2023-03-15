import { useContext, useEffect } from 'react';
import axios from 'axios';
import Loader from "./Loader";
import Login from "./Login";
import { Global } from './Global';
import RoleError from './RoleError';

function Auth({ children, roles }) {

    const { setAuthName, logged, setLogged, route } = useContext(Global);


    useEffect(() => {
        axios.get('http://localhost:3003/login', { withCredentials: true })
            .then(res => {
                console.log(res.data);
                if (res.data.status === 'ok') {
                    setAuthName(res.data.name);
                    if (roles.length) {
                        if (roles.includes(res.data.role)) {
                            setLogged(1);
                        } else {
                            setLogged(3);
                        }

                    } else {
                        setLogged(1);
                    }
                } else {
                    setAuthName(null);
                    if (roles.length) {
                        setLogged(2);
                    } else {
                        setLogged(1);
                    }
                }
            });
    }, [route]);


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
        return (
            <Login />
        )
    }
    if (3 === logged) {
        return (
            <RoleError />
        )
    }

}

export default Auth;