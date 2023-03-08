import { useContext } from "react"
import { Global } from "./Global"

function Messages() {

    const { messages } = useContext(Global);

    return (
        <div className="messages-bin">
            {
                messages.map(m => (<div key={m.id} className={'alert alert-' + m.type} role="alert">
                {m.text}
              </div>))
            }
        </div>
    )
}

export default Messages;