function BaseButton({title, clickHandler}) {

    return (
        <button onClick={clickHandler}>{title}</button>
    )
}

export default BaseButton;