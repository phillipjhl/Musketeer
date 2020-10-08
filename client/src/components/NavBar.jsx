import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AuthButton from "./auth/authButton";
import UserContext from "../services/context";
import MessageBanner from "./message";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static contextType = UserContext;

  render() {
    let style =
      this.props.sticky === true
        ? { position: "sticky", top: 0, zIndex: 100 }
        : null;

    return (
      <Fragment>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          style={style}
        >
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#top-Nav"
            aria-controls="top-Nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="top-Nav">
            <div className="navbar-nav flex-row">
              <Link to="/blogs" className="nav-item nav-link">
                Blog <span className="sr-only">(current)</span>
              </Link>
              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link>
              <Link to="/donate" className="nav-item nav-link">
                Donate
              </Link>
              <AuthButton />
            </div>
            <div className="flex-row navbar-right">
              <span className="nav-item navbar-message">
                {`Welcome, ${
                  this.context.first_name
                    ? this.context.first_name
                    : this.context
                }`}
              </span>
            </div>
          </div>
        </nav>
        <MessageBanner message="Please be patient while this site is upgraded. Please still feel free to contact me for inquiries."/>
      </Fragment>
    );
  }
}

export default NavBar;
