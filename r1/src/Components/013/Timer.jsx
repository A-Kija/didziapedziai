import { useEffect, useState } from "react"

function Timer() {

    const [seconds, setSeconds] = useState(0);


    useEffect(() => {
        const timerId = setInterval(() => setSeconds(s => s + 1), 1000);
        return () => clearInterval(timerId);
    }, []);


    return (
        <div className="sq-bin">
            <div className="sq" style={{
            backgroundColor:'#9acd3270',
            borderColor: '#9acd32',
            }}>

                {seconds}
        </div>
        </div>
    )

}

export default Timer;