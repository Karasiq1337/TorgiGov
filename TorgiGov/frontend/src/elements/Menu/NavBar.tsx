import { NavLink } from "react-router-dom";

import "./NavBar.css";

export function NavBar() {
    return (
        <nav className="navbar-container">
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    );
}