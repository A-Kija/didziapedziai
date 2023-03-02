import { useContext } from "react";
import { GlobalSqContext } from "./GlobalSqContext";
import GlobalUserContext from "./GlobalUserContext";

function BoxSmall() {

    const { sq1, sq2 } = useContext(GlobalSqContext);
    const { user } = useContext(GlobalUserContext);

    return (
        <div className="box-area">
            <div className="title">SMALL BOX of {user}</div>
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