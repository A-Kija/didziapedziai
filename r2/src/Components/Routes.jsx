import { useContext } from "react";
import Auth from "./Auth";
import { Global } from "./Global";
import Home from "./Home";
import Login from "./Login";
import LuckyNumbers from "./LuckyNumbers";
import Register from "./Register";
import Users from "./Users";

function Routes() {

    const {route} = useContext(Global);


    switch(route) {
        case 'home': return <Auth roles={''}><Home /></Auth>
        case 'numbers': return <Auth roles={'admin,manager'}><LuckyNumbers /></Auth>
        case 'users': return <Auth roles={'admin'}><Users /></Auth> 

        case 'login': return <Login />
        case 'register': return <Register />
        default: return null
    }



}

export default Routes;