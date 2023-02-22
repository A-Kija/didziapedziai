import { useEffect } from "react";

function Fenix() {

    // console.log('Fenix function');

    useEffect(
        () => {
            console.log('Fenix is alive');
            return () => {
                console.log('Fenix is dead');
            }
        }
        ,[]
    );

    return (
        <>
        <h2>FENIX</h2>
         </>
        
    );
}

export default Fenix;