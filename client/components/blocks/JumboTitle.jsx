import React from "react";
import { Link } from "react-router-dom";

export default function JumboTitle(props) {

  return (
    <div className="jumbotron-textbox">
      <h4 className="jumbotron-subtitle text-uppercase text-bold mb-0">
        {props.subtitleTop}
      </h4>
      <h2 className="font-weight-bold text-size-large mb-4">
        I am a Birmingham-based
        <span className="text-primary"> product designer </span>
        with three years of design experience and a
        <span className="text-primary"> passion </span> for solving problems
        through simple and intuitive
        <span className="text-primary"> user-centeric </span> designs.
      </h2>
      {props.ctaText && (
        <Link
          to={"/contact"}
          title={props.ctaText}
          className="btn btn-md btn-outline-secondary font-weight-bold"
        >
          {props.ctaText}
        </Link>
      )}
    </div>
  );
}
