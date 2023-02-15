function DelButton({classes, sq, setSq}) {

    const clickHandler = () => {
        setSq(s => s.filter(s => s.id !== sq.id));
    }

    return (
        <button className={classes} onClick={clickHandler}>del</button>
    )
}

export default DelButton;