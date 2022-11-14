import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <img className="Logo" src="" alt="" />
        <nav>
          <ul className="nav-links">
            <Link to="/About">
              <li>About</li>
            </Link>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="Projects">
              <li>Projects</li>
            </Link>
            <Link to="Blog">
              <li>Blog</li>
            </Link>
          </ul>
        </nav>
        <Link to="/Contact">
          <button className="cta">Contact</button>
        </Link>
      </header>
    </>
  );
};

export default Navbar;
