import React from "react";
import PhotoList from "../PhotoList/PhotoList.component";
import { NavLink, Route } from "react-router-dom";

const Nav = (props) => {
  console.log(props);
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
