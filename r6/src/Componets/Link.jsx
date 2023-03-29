import { useContext } from 'react';
import { navigate } from '../actions';
import { Store } from '../store';

export default function Link({ to, children, className, show }) {

    const { actionsList, dispach } = useContext(Store);

    const go = e => {
        e.preventDefault();
        window.location.hash = to || show;
        if (to) {
             dispach(navigate(to));
        } else {
            dispach(actionsList[show]());
        }
       
    }

    return (
        <a href={to || show} className={className} onClick={go}>{children}</a>
    );
}