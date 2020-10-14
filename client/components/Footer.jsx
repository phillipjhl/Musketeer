import React from "react";
import WhiteLogo from "../assets/images/logos/Sub-Logo.svg";
import { Link } from "react-router-dom";
import Resume from "../assets/documents/KatrinaLanglandResume.pdf";

export default function Footer(props) {
  return (
    <footer className="footer container-fluid w-100 text-white bg-secondary">
      <div className="h-100 d-flex justify-content-center align-items-center">
        <div className="col-sm-6 row d-flex mx-auto">
          <div className="col col-2 ml-auto text-right d-flex flex-column justify-content-center align-items-end footer-list">
            <span className="border-bottom footer-list__title">MENU</span>
            <nav className="d-flex flex-column justify-content-end">
              <Link to={"/home"}>Work</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/contact"}>Contact</Link>
              <Link
                // download="Katrina_Langland_Resume"
                target="_blank"
                to={Resume}
              >
                Resume
              </Link>
            </nav>
          </div>

          <div className="col col-4 text-center">
            <WhiteLogo />
            <div className="mt-3 text-center" style={{ fontSize: "14px" }}>
              <p className="mb-0">Birmingham, AL</p>
              <p className="mb-0">Seeking Opportunities</p>
            </div>
          </div>

          <div className="col col-2 mr-auto text-left d-flex flex-column justify-content-center align-items-start footer-list">
            <span className="border-bottom mr-auto footer-list__title">
              CONNECT
            </span>
            <nav className="d-flex flex-column justify-content-end">
              <a
                href="mailto:katrina@katrinalangland.com"
                role="link"
                target="_blank"
                title="Email Me"
              >
                Email
              </a>
              <a href="https://instagram.com/katrinalangland" role="link" target="_blank" title="Instagram">
                Instagram
              </a>
              <a href="https://linkedin.com/in/katrinalangland" role="link" target="_blank" title="LinkedIn">
                LinkedIn
              </a>
              <a
                href="https://dribbble.com/katrinalangland"
                title="Dribble"
                role="link"
                target="_blank"
              >
                Dribble
              </a>
            </nav>
          </div>
          <small className="col-12 mt-4 text-center">
            © Katrina Langland 2020 | All Rights Reserved
          </small>
        </div>
      </div>
    </footer>
  );
}
