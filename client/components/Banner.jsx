import React from "react";

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
          <button
            className="btn btn-lg btn-outline-primary text-uppercase"
            onClick={() => {}}
            title="Download Now"
          >
            {props.cta}
          </button>
        )}
      </div>
    </section>
  );
}
