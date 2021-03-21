import React from "react";
// import WhiteLogo from "../assets/images/logos/Sub-Logo.svg";
import { Link } from "react-router-dom";
// import Resume from "../assets/documents/KatrinaLanglandResume.pdf";

export default function Footer(props) {
  return (
    <footer
      id="footer"
      className="footer container-fluid w-100 text-dark bg-light">
      <div className="h-100 row mx-auto">
        <div className="col-md-12 d-flex flex-column justify-content-center align-itms-center mx-auto">
          <div className="d-flex justify-content-center align-itms-center text-center border-bottom border-dark">
            <Link to={"/"} className={"text-dark"}>
              {/* <WhiteLogo /> */}
              <h4 className="font-weight-bold">Katrina Langland</h4>
              <p>Product Designer in Birmingham, AL</p>
            </Link>
          </div>
          {props.children}
          {/* <nav className="nav d-flex flex-row justify-content-center footer-list border-bottom border-dark">
            <a
              href="mailto:katrina@katrinalangland.com"
              role="link"
              target="_blank"
              title="Email Me"
              className="nav-link">
              Email
            </a>
            <a
              href="https://linkedin.com/in/katrinalangland"
              role="link"
              target="_blank"
              title="LinkedIn"
              className="nav-link">
              LinkedIn
            </a>
            <a
              href="https://dribbble.com/katrinalangland"
              title="Dribble"
              role="link"
              target="_blank"
              className="nav-link">
              Dribbble
            </a>
          </nav> */}
          <small className="d-flex mt-4 text-center align-items-center justify-content-center">
            © Katrina Langland 2021 | All Rights Reserved
          </small>
        </div>
      </div>
    </footer>
  );
}
