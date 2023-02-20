function BlueButton({title, clickHandler}) {

    return (
        <button className="blue" onClick={clickHandler}>{title}</button>
    )
}

export default BlueButton;