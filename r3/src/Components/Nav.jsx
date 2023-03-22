import { useContext } from "react";
import { Global } from "./Global";

function Nav() {

    const { logOut, authName } = useContext(Global);

    return (
        <nav>
            {
                authName
                ? <button type="button" className="btn btn-primary" onClick={logOut}>Logout, {authName}</button>
                : null 
            }
            
        </nav>
    );
}

export default Nav;