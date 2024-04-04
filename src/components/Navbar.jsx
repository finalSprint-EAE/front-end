import React from "react";
import {Link} from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
    return (
        <nav>
            <Link to="/">
                Search
            </Link>
            <Link to="/login">
                Login
            </Link>
            <Link to="/register">
                Register
            </Link>
        </nav>
    )
}

export default Navbar;