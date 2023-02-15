function StopSpinButton({classes, setSq}) {

    const clickHandler = () => {
        setSq(s => s.map(s => ({...s, spin: false})));
    }

    return (
        <button className={classes} onClick={clickHandler}>stop spin</button>
    );
}

export default StopSpinButton;