import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AuthButton from "./auth/authButton";
import UserContext from "../services/context"; 

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static contextType = UserContext;

  render() {
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
        {`Welcome, ${this.context.first_name}`}
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
}

export default NavBar;
