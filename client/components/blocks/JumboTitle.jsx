import React from "react";

export default function JumboTitle(props) {
  const handleLinkClick = e => {
    e.preventDefault();

    location.href = "/about";
    return;
  };

  return (
    <div>
      <p className="jumbotron-subtitle mb-0">{props.subtitleTop}</p>
      <p className="font-weight-bold text-size-large">
        I am a Birmingham-based{" "}
        <span className="text-primary">product designer</span> <br />
        with three years of design experience and a <br />
        <span className="text-primary">passion</span> for solving problems
        through simple
        <br />
        and intuitive <span className="text-primary">user-centeric</span>{" "}
        designs.
      </p>
      <button
        type="button"
        onClick={e => handleLinkClick()}
        className="btn btn-lg btn-outline-secondary font-weight-bold"
      >
        {props.ctaText}
      </button>
    </div>
  );
}
