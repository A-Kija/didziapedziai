import { v4 as uuidv4 } from 'uuid';
function CloneButton({classes, sq, setSq}) {

    const clickHandler = () => {
        setSq(s => [...s, {...sq, id: uuidv4()}]);
    }

    return (
        <button className={classes} onClick={clickHandler}>clone</button>
    )
}

export default CloneButton;