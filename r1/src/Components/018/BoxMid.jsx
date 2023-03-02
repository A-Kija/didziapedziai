import BoxSmall from "./BoxSmall";

function BoxMid({ sq1 }) {

    return (
        <>
        <div className="box-area">
            <div className="title">MIDDLE BOX</div>
            <BoxSmall sq1={sq1} />
            </div>
        </>
    )
}

export default BoxMid;