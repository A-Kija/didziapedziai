import { useContext } from "react";
import ContextData from "./ContextData";

function BoxSmall({ sq1 }) {

    const sq2 = useContext(ContextData);

    return (
        <div className="box-area">
            <div className="title">SMALL BOX</div>
            <div className="sq-bin">
                {
                    sq1?.map((s, i) => <div key={i} className="sq sm">{s}</div>)
                }
            </div>
            <div className="sq-bin">
                {
                    sq2?.map((s, i) => <div key={i} className="sq sm">{s}</div>)
                }
            </div>
        </div>
    )
}

export default BoxSmall;