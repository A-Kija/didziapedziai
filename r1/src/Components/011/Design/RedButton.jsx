function RedButton({title, clickHandler}) {

    return (
        <button className="red" onClick={clickHandler}>{title}</button>
    )
}

export default RedButton;