import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AuthButton from "./auth/authButton";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        Home
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav flex-row">
          <AuthButton />
          <Link to="/blogs" className="nav-item nav-link">
            Blog <span className="sr-only">(current)</span>
          </Link>
          <Link to="/contact" className="nav-item nav-link">
            Contact
          </Link>
          <Link to="/donate" className="nav-item nav-link">
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
