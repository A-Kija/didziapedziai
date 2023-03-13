import { useContext } from "react";
import Auth from "./Auth";
import { Global } from "./Global";
import Login from "./Login";
import LuckyNumbers from "./LuckyNumbers";

function Routes() {

    const {route} = useContext(Global);


    switch(route) {
        case 'numbers': return <Auth><LuckyNumbers /></Auth> 
        case 'login': return <Login />
        default: return null
    }



}

export default Routes;