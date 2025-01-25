import React from "react";
// import { Link } from "react-router-dom";
import KLogo from "../../../assets/images/Homepage/K-logo.png";
import AnchorLink from "../../blocks/anchorLink";
import Trail from "../../blocks/Trail";

export default function JumboTitleNew(props) {
  return (
    <div className="jumbotron-textbox text-center">
      <Trail>
        <p className="jumbotron-subtitle text-uppercase text-bold mb-4">
          {props.subtitleTop}
        </p>
        <h1 className="font-weight-bold mb-md">
          {props.title}
        </h1>
        <AnchorLink ctaText={props.ctaText} ctaLink={props.ctaLink} />
      </Trail>
    </div>
  );
}
