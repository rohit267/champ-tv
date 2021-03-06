import React from "react";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                ChampTV
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                   
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Movies
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Sports
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Music
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Kids
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Country
                        </a>
                        <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                        >
                            <a className="dropdown-item" href="#">
                                India
                            </a>
                            <a className="dropdown-item" href="#">
                                United Kingdom
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                                USA
                            </a>
                        </div>
                    </li>
                   
                </ul>
                
            </div>
        </nav>
    );
}

export default Navbar;
