import React from "react";
import {NavLink} from "react-router-dom"; 

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
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/educationskills">Education & Skills</NavLink>
                    </li>
                    <li className="nav-item" href="#">
                        <NavLink className="nav-link" to="/projects">Projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact and Resume</NavLink>
                    </li>

                </ul>
            </div>
        </nav>
    </div>
    );
}

export default Navbar;