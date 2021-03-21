import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import AuthButton from "./auth/authButton";
import UserContext from "../services/context";
import MessageBanner from "./message";
import Resume from "../assets/documents/KatrinaLanglandResume.pdf";

export function NavBarLink(props) {
  return (
    <Link
      key={`${props.label}-${props.index}`}
      to={props.route}
      className={`${
        props.inDropdown ? "dropdown-item" : ""
      } text-lg-left nav-link px-4`}
      data-toggle={"collapse"}
      data-target={".navbar-collapse.show"}>
      {props.label}
      {props.index === 0 ? <span className="sr-only">(current)</span> : null}
    </Link>
  );
}
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
      {
        label: "Work",
        dropdown: {
          linksConfig: [
            { route: "/casestudy/gro", label: "GRO" },
            { route: "/casestudy/groceryapp", label: "Grocery App" },
            { route: "/casestudy/runr", label: "RUNR" },
            { route: "/casestudy/designstudy", label: "Design Study" }
          ]
        }
      },
      { route: "/about", label: "About" },
      { route: "/contact", label: "Contact" }
    ];

    let links = linksConfig.map((link, i) => {
      if (link.dropdown) {
        let subLinks = link.dropdown.linksConfig.map((link, index) => {
          return (
            <NavBarLink
              {...link}
              key={`${link.label}-${index}`}
              inDropdown
              index={index}
            />
          );
        });
        return (
          <li key={`${link.label}-${i}`} className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              {link.label}
            </a>
            <div
              className="dropdown-menu border-0 border-lg"
              aria-labelledby="navbarDropdownMenuLink">
              {subLinks}
            </div>
          </li>
        );
      } else {
        return (
          <li key={`${link.label}-${i}`} className="nav-item">
            <Link
              // key={`${link.label}-${i}`}
              to={link.route}
              className="nav-link px-4"
              data-toggle={"collapse"}
              data-target={".navbar-collapse.show"}>
              {link.label}
              {i === 0 ? <span className="sr-only">(current)</span> : null}
            </Link>
          </li>
        );
      }
    });

    return (
      <Fragment>
        <nav
          className={`navbar navbar-expand-lg navbar-toggleable-sm navbar-light fixed-top navbar-${styleMode} bg-${styleMode} px-lg-5`}
          style={style}>
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
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="top-Nav">
            <ul className="ml-auto navbar-nav">
              {links}
              <li className="nav-item">
                <Link
                  // download="Katrina_Langland_Resume"
                  target="_blank"
                  className="nav-link px-4"
                  to={Resume}>
                  RESUME
                </Link>
              </li>
              {this.props.loginBtn && <AuthButton />}
            </ul>
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
