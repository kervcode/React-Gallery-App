import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/boats">Boats</NavLink>
        </li>
        <li>
          <NavLink to="/rivers">Rivers</NavLink>
        </li>
        <li>
          <NavLink to="/beaches">Beaches</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
