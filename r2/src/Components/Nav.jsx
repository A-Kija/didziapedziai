import { useContext } from "react";
import { Global } from "./Global";

function Nav() {

    const { route, setRoute, authName, logOut } = useContext(Global);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="nav-top">
                    <div className="navbar-brand">Lucky numbers</div>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <span onClick={_ => setRoute('numbers')} className={
                                    'nav-link' + (route === 'numbers' ? ' active' : '')
                                }>Numbers</span>
                            </li>
                            <li className="nav-item">
                                <span onClick={_ => setRoute('users')} className={
                                    'nav-link' + (route === 'users' ? ' active' : '')
                                }>Users</span>
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        {
                            authName ?
                                (
                                    <>
                                        <li className="nav-item">
                                            <span className="nav-link"><b>{authName}</b></span>
                                        </li>
                                        <li className="nav-item">
                                            <span className="nav-link" onClick={logOut}>Logout</span>
                                        </li>
                                    </>
                                ) :
                                (
                                    <>
                                        <li className="nav-item">
                                            <span onClick={_ => setRoute('login')} className="nav-link">Login</span>
                                        </li>
                                        <li className="nav-item">
                                            <span onClick={_ => setRoute('register')} className="nav-link">Register</span>
                                        </li>
                                    </>
                                )

                        }

                    </ul>
                </div>
            </div>
        </nav>
    );

}

export default Nav;