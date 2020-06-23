import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/parks">Parks</NavLink>
        </li>
        <li>
          <NavLink to="/bridges">Bridges</NavLink>
        </li>
        <li>
          <NavLink to="/flowers">Flowers</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
