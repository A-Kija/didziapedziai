import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

function Messages() {

    const {messages} = useContext(GlobalContext);

    return (
        <div className="messages">
            {
                messages.map(m => <div key={m.id} className={'message ' + m.type}>{m.text}</div>)
            }
        </div>
    );

}

export default Messages;