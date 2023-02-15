function SpinAllButton({classes, setSq}) {

    const clickHandler = () => {
        setSq(s => s.map(s => ({...s, spin: true})));
    }

    return (
        <button className={classes} onClick={clickHandler}>spin all</button>
    );
}

export default SpinAllButton;