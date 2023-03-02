import { createContext, useState } from 'react';

export const GlobalSqContext = createContext();

export const GlobalSqContextProvider = ({children}) => {

    const [sq1, setSq1] = useState([]);
    const [sq2, setSq2] = useState([]);

    return (
        <GlobalSqContext.Provider value={{ sq1, sq2, setSq1, setSq2 }}>
            {children}
        </GlobalSqContext.Provider>
    );

}