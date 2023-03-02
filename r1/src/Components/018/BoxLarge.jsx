import BoxMid from "./BoxMid";

function BoxLarge({ sq1 }) {

    return (
        <>
            <div className="box-area">
                <div className="title">LARGE BOX</div>
                <BoxMid sq1={sq1} />
            </div>
        </>
    )
}

export default BoxLarge;