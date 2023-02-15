import CloneButton from "./Buttons/CloneButton";
import DelButton from "./Buttons/DelButton";

function Sq({s, i, setSq}) {
    return (
        <div className="sq" style={{
            backgroundColor:s.color + '70',
            borderColor: s.color,
            }}>
                <DelButton classes="red small" sq={s} setSq={setSq}/>
                <CloneButton classes="small" sq={s} setSq={setSq}/>
                {i}
        </div>
    )
}

export default Sq;