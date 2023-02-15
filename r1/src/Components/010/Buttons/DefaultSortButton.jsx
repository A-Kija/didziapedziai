function DefaultSortButton({classes, setSq}) {

    const clickHandler = () => {
        setSq(s => [...s].sort((a, b) => a.row - b.row));
    }

    return (
        <button className={classes} onClick={clickHandler}>sort default</button>
    );
}

export default DefaultSortButton;