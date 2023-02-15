function ShowAllButton({classes, setSq}) {

    const clickHandler = () => {
        setSq(s => s.map(s => ({...s, show: true})));
    }

    return (
        <button className={classes} onClick={clickHandler}>all</button>
    );
}

export default ShowAllButton;