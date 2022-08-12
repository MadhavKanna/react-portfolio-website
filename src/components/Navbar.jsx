import React from "react";

function Navbar(props) {
    return (
    <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-black animated slideInDown">
            <a className="navbar-brand " id="brand" href="#">Project Robot</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Education & Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Qualifications</a>
                    </li>
                    <li className="nav-item" href="#">
                        <a className="nav-link" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact and Resume</a>
                    </li>

                </ul>
            </div>
        </nav>
    </div>
    );
}

export default Navbar;