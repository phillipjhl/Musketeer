import React from "react";

import { Trail } from "../../blocks/Trail";

export default function CSPageJumbo(props) {
  let title = null;
  let imageStyle = props.imageStyle ? props.imageStyle : { width: "200px" };

  if (props.titleComp) {
    title = props.titleComp;
  } else if (props.title) {
    title = <span className="">{props.title}</span>;
  }
  return (
    <div
      style={{
        backgroundImage: `url(${props.heroImage})`
      }}
      className={`${props.className} d-flex flex-column casestudy-top`}>
      <div className="casestudy-top-banner flex-grow-1 pb-5 d-flex flex-column justify-content-end align-items-start container">
        <div className="col-sm-5 mr-auto casestudy-top-banner__block py-4">
          <Trail>
            <div
              className="GRO-logo d-flex flex-column align-items-start"
              style={imageStyle}>
              {props.appImageComp && props.appImageComp}
              {title}
            </div>
            <p className="">{props.description}</p>
          </Trail>
        </div>
      </div>
    </div>
  );
}

export function CSPageJumboV2(props) {
  return (
    <div
      style={{
        height: "auto",
        minHeight: "758px",
        backgroundImage: `url(${props.heroImage})`,
        backgroundPosition: "90% 100%",
        backgroundSize: "45% auto"
      }}
      className={`${props.className} d-flex flex-column casestudy-top`}>
      <div className="casestudy-top-banner flex-grow-1 pb-5 d-flex flex-column justify-content-center align-items-start container">
        <div className="col-sm-7 mr-auto casestudy-top-banner__block py-4">
          <Trail>
            <span className="text-uppercase font-size-sm">
              {props.subtitle}
            </span>
            <h1>{props.title}</h1>
            {props.children}
          </Trail>
        </div>
      </div>
    </div>
  );
}
