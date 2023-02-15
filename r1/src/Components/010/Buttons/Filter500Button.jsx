function Filter500Button({classes, setSq}) {

    const clickHandler = () => {
        setSq(s => s.map(s => s.number > 500 ? {...s, show: true} : {...s, show: false}));
    }

    return (
        <button className={classes} onClick={clickHandler}>big 500</button>
    );
}

export default Filter500Button;