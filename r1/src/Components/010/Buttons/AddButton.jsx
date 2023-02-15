import { v4 as uuidv4 } from 'uuid';
import randColor from '../../../Functions/randColor';
import rand from '../../../Functions/rand';
function AddButton({classes, setSq}) {

    const clickHandler = () => {
        setSq(s => [...s, { 
            id: uuidv4(),
            color: randColor(),
            spin: false,
            number: ('' + rand(0, 999)).padStart(3, '0'),
            row: s.length,
            show: true 
        }]);
    }

    return (
        <button className={classes} onClick={clickHandler}>Add</button>
    );
}

export default AddButton;