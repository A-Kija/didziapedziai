function RedSmallButton({title, clickHandler}) {

    return (
        <button className="red small" onClick={clickHandler}>{title}</button>
    )
}

export default RedSmallButton;