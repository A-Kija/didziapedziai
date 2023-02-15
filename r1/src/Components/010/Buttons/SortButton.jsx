function SortButton({classes, setSq}) {

    const clickHandler = () => {
        setSq(s => [...s].sort((a, b) => a.number.localeCompare(b.number)));
    }

    return (
        <button className={classes} onClick={clickHandler}>sort</button>
    );
}

export default SortButton;