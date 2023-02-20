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

export const withClone = (Component) => (props) => {
    const clickHandler = () => {
        props.setSq(s => [...s, {...props.sq, id: uuidv4()}]);
    }
    return (
        <Component title={props.title} clickHandler={clickHandler} />
    );
}

export const withColor = (Component) => (props) => {
    const clickHandler = () => {
        props.setSq(s => s.map(s => ({...s, color: randColor()})));
    }
    return (
        <Component title={props.title} clickHandler={clickHandler} />
    );
}

export const withSpin = (Component) => (props) => {
    const clickHandler = () => {
        props.setSq(s => s.map(s => s.id === props.sq.id ? {...s, spin: !s.spin} : {...s}));
    }
    return (
        <Component title={props.title} clickHandler={clickHandler} />
    );
}

export const withDelete = (Component) => (props) => {
    const clickHandler = () => {
        props.setSq(s => s.filter(s => s.id !== props.sq.id));
    }
    return (
        <Component title={props.title} clickHandler={clickHandler} />
    );
}





