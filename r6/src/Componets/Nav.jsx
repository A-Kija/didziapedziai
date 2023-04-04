import Link from "./Link";

export default function Nav() {

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="a">Navbar w/ text</a>
                <div className="navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="home" className="nav-link active">Pradinis</Link>
                        </li>
                        <li className="nav-item">
                            <Link action="sections-list" className="nav-link">Sritys</Link>
                        </li>
                        <li className="nav-item">
                            <Link action="districts-list" className="nav-link">Rajonai</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="sections-create" className="nav-link">Nauja Sritis</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="districts-create" className="nav-link">Naujas Rajonas</Link>
                        </li>


                        
                    </ul>
                    <span className="navbar-text">
                        <Link to="login" className="nav-link">Prisijungti</Link>
                    </span>
                </div>
            </div>
        </nav>
    );
}