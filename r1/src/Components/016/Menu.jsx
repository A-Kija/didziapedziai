function Menu({setPage}) {

    return (
        <div className="menu-links">
            <button onClick={() => setPage('home')}>home</button>
            <button onClick={() => setPage('racoon')}>racoon</button>
            <button onClick={() => setPage('fox')}>fox</button>
        </div>
    )
}

export default Menu;