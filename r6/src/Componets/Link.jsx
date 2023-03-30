import { useContext } from 'react';
import { navigate } from '../actions';
import { Store } from '../store';

export default function Link({ to, children, className, action }) {

    const { actionsList, dispach, start } = useContext(Store);

    const go = e => {
        e.preventDefault();
        // window.location.hash = to || action;
        if (to) {
             dispach(navigate(to));
        } else {
            start();
            dispach(actionsList[action]());
        }
       
    }

    return (
        <a href={to || action} className={className} onClick={go}>{children}</a>
    );
}