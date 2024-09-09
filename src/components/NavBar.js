import React from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav>
        <NavLink to="/" className="nav-link">
          {" "}
          Home
        </NavLink>
        <NavLink to="/cars" className="nav-link">
          Cars
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </nav>
      <header>
        <Link to="/new_car">
          <button className="new-car">Add New Car</button>
        </Link>
      </header>
    </>
  );
}

export default NavBar;
