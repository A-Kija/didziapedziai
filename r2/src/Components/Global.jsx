import { createContext } from "react";
import { useRead } from "../Use/useRead";
import { useWrite } from "../Use/useWrite";

export const Global = createContext();

export const GlobalProvider = ({children}) => {

    const [response, setCreate] = useWrite();
    const [list, setUpdate] = useRead();

    console.log(list)

    return (
        <Global.Provider value={{
            setCreate,
            list
        }}>
            {children}
        </Global.Provider>
    )
}