import React from "react";

import { Trail } from "../../blocks/Trail";

export default function CSPageJumbo(props) {
  return (
    <div
      style={{
        height: "758px",
        backgroundImage: `url(${props.heroImage})`
      }}
      className={`${props.className} d-flex flex-column casestudy-top`}>
      <div className="casestudy-top-banner flex-grow-1 pb-5 d-flex flex-column justify-content-end align-items-start container">
        <div className="col-sm-5 mr-auto casestudy-top-banner__block text-white">
          <Trail>
            <div
              className="GRO-logo d-flex flex-column align-items-start"
              style={{ width: "200px" }}>
              {props.appImageComp}
              <span className="">{props.title}</span>
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
        minHeight: "758px",
        backgroundImage: `url(${props.heroImage})`,
        backgroundPosition: "90% 100%",
        backgroundSize: "45% auto"
      }}
      className={`${props.className} d-flex flex-column casestudy-top`}>
      <div className="casestudy-top-banner flex-grow-1 pb-5 d-flex flex-column justify-content-center align-items-start container">
        <div className="col-sm-7 mr-auto casestudy-top-banner__block text-white">
          <Trail>
            <h1>{props.title}</h1>
            {props.children}
          </Trail>
        </div>
      </div>
    </div>
  );
}
