import { v4 as uuidv4 } from 'uuid';
import randColor from '../../../Functions/randColor';
import rand from '../../../Functions/rand';

export const withAdd = (Component) => (props) => {
    const clickHandler = () => {
        props.setSq(s => [...s, { 
            id: uuidv4(),
            color: randColor(),
            spin: false,
            number: ('' + rand(0, 999)).padStart(3, '0'),
            row: s.length,
            show: true 
        }]);
    }
    return (
        <Component title={props.title} clickHandler={clickHandler} />
    );
}

export const withClear = (Component) => (props) => {

    const clickHandler = () => {
        props.setSq([]);
    }

    return (
        <Component title={props.title} clickHandler={clickHandler} />
    );
}