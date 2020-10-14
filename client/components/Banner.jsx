import React from "react";
import { Link } from "react-router-dom";
import Resume from "../assets/documents/KatrinaLanglandResume.pdf";

export default function Banner(props) {
  return (
    <section className="w-100 bg-light" style={{ height: "auto" }}>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "350px" }}
      >
        {props.subtitle && (
          <span className="text-subtitle font-weight-bold">
            {props.subtitle}
          </span>
        )}
        {props.message && (
          <div className="text-title mb-0 font-weight-bold text-center">
            {props.message}
          </div>
        )}
        {props.cta && (
          <Link
            // download="Katrina_Langland_Resume"
            target="_blank"
            className="btn btn-outline-primary text-uppercase"
            to={Resume}
            title="Download Now"
          >
            {props.cta}
          </Link>
        )}
      </div>
    </section>
  );
}
