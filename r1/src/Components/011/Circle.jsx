import { useState } from "react";

function Circle({children}) {

    const [count, setCount] = useState(0);

    // const addCount = c  =>  ({...c, props: {...c.props, count: count}});


    return (
        <>
        <button className="blue" onClick={() => setCount(c => c + 1)}>plus 1</button>
        <div className="circle">
            {
                children.map((n, i) => ({...n, props: {...n.props, count: count + i }})) 
            }
        </div>
        </>
    );
}

export default Circle;