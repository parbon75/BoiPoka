import React from "react";
import { NavLink } from 'react-router-dom'; //Navlink is A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.

import './NavLinks.css';

const NavLinks = props => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact> ALL USERS </NavLink>
            </li>
            <li>
                <NavLink to="/u1/reviews"> MY REVIEWS </NavLink>  {/* only be rendered when a user is logged in */}
            </li>
            <li>
                <NavLink to="/reviews/new"> ADD REVIEW </NavLink>  {/* only be rendered when a user is logged in */}
            </li>
            <li>
                <NavLink to="/auth"> AUTHENTICATE </NavLink> {/* only be rendered when a user is NOT logged in */}
            </li>
        </ul>
    );
};

export default NavLinks;