import React from "react";
import heroImage from "../assets/images/Homepage/Hero-Image.jpg";
import ChevDown from "bootstrap-icons/icons/chevron-down.svg";

function Jumbotron(props) {
  const TitleComp = props.titleComp ? props.titleComp : null;
  let subtitleTop = props.subtitleTop ? props.subtitleTop : "";
  let className = props.class ? props.class : "";
  let link = props.link ? props.link : "";
  let styles = {
    backgroundImage: `url('${heroImage}')`
  };

  return (
    <div
      className={`jumbotron bg-white text-dark px-md-5 p-dash ${className}`}
      style={styles}
    >
      <div
        className="col-md-7 d-flex flex-column justify-content-end"
        style={{
          minHeight: "650px"
        }}
      >
        <TitleComp ctaText={props.ctaText} subtitleTop={props.subtitleTop} />
      </div>
      <div className="w-100 d-flex justify-content-center align-items-center">
        <a href="#cards" className="jumbotron__chevron text-dark" style={{ fontSize: "4rem" }} >
          <ChevDown />
        </a>
      </div>
    </div>
  );
}

export default Jumbotron;
