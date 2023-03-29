export default function Messages({ messages }) {

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
