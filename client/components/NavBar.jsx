import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AuthButton from "./auth/authButton";
import UserContext from "../services/context";
import MessageBanner from "./message";
import Resume from "../assets/documents/KatrinaLanglandResume.pdf";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static contextType = UserContext;

  render() {
    let style = {};
    // this.props.sticky === true
    //   ? { position: "sticky", top: 0, zIndex: 100 }
    //   : {};

    let styleMode = this.props.styleMode;

    let homeLinkText = this.props.homeLinkText && this.props.homeLinkText;

    const linksConfig = [
      { route: "/home", label: "Work" },
      { route: "/about", label: "About" },
      { route: "/contact", label: "Contact" }
    ];

    let links = linksConfig.map((link, i) => {
      return (
        <Link
          key={`${link.label}-${i}`}
          to={link.route}
          className="nav-item nav-link px-4"
        >
          {link.label}
          {i === 0 ? <span className="sr-only">(current)</span> : null}
        </Link>
      );
    });

    return (
      <Fragment>
        <nav
          className={`navbar navbar-expand-lg navbar-toggleable-sm navbar-light fixed-top navbar-${styleMode} bg-${styleMode} px-lg-5`}
          style={style}
        >
          <Link to="/" className="navbar-brand">
            {homeLinkText}
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
            <div className="ml-auto navbar-nav">
              {links}
              <Link
                // download="Katrina_Langland_Resume"
                target="_blank"
                className="nav-item nav-link px-4"
                to={Resume}
              >
                RESUME
              </Link>
              {this.props.loginBtn && <AuthButton />}
            </div>
            {this.props.showUser && (
              <div className="flex-row navbar-right">
                <span className="nav-item navbar-message">
                  {`Welcome, ${
                    this.context.first_name
                      ? this.context.first_name
                      : this.context
                  }`}
                </span>
              </div>
            )}
          </div>
        </nav>
        {this.props.messageBanner && (
          <MessageBanner message="Please be patient while this site is upgraded. Please still feel free to contact me for inquiries." />
        )}
      </Fragment>
    );
  }
}

export default NavBar;
