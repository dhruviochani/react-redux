import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/nav.css'

function Navbar() {
    return (
        <div>
            <nav className="navbarCollapse">

                <Link className="navbar-brand" to="#">Support</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Link</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Link</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Link</Link>
                        </li>
                    </ul>
                </div> */}
            </nav></div>
    )
}

export default Navbar