import { useContext } from 'react';
import { navigate } from '../actions';
import { Store } from '../store';

export default function Link({to, children, className}) {

    const {dispach} = useContext(Store);

    const go = e => {
        e.preventDefault();
        dispach(navigate(to));
    }

    return (
        <a href={to} className={className} onClick={go}>{children}</a>
    );
}