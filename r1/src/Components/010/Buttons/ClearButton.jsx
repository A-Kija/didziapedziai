function ClearButton({classes, setSq}) {

    const clickHandler = () => {
        setSq([]);
    }

    return (
        <button className={classes} onClick={clickHandler}>Clear</button>
    );
}

export default ClearButton;