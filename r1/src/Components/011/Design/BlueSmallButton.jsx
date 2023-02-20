function BlueSmallButton({title, clickHandler}) {

    return (
        <button className="blue small" onClick={clickHandler}>{title}</button>
    )
}

export default BlueSmallButton;