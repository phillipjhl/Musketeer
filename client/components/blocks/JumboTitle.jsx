import React from "react";

export default function JumboTitle(props) {
  const handleLinkClick = e => {
    e.preventDefault();

    location.href = "/about";
    return;
  };

  return (
    <div className="jumbotron-textbox">
      <h4 className="jumbotron-subtitle text-uppercase text-bold mb-0">
        {props.subtitleTop}
      </h4>
      <h2 className="font-weight-bold text-size-large mb-4">
        I am a Birmingham-based{" "}
        <span className="text-primary">product designer</span> <br />
        with three years of design experience and a <br />
        <span className="text-primary">passion</span> for solving problems
        through simple
        <br />
        and intuitive <span className="text-primary">user-centeric</span>{" "}
        designs.
      </h2>
      {props.ctaText && (
        <button
          type="button"
          onClick={e => handleLinkClick()}
          className="btn btn-md btn-outline-secondary font-weight-bold"
        >
          {props.ctaText}
        </button>
      )}
    </div>
  );
}
