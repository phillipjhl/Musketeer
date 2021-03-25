import React from "react";

export default function CSPageJumbo(props) {
  return (
    <div
      style={{
        height: "758px",
        backgroundImage: `url(${props.heroImage})`
      }}
      className={`${props.className} casestudy-top`}>
      <div className="w-100 h-100">
        <div className="casestudy-top-banner h-100 pb-5 d-flex flex-column justify-content-end align-items-start container">
          <div className="col-sm-5 mr-auto casestudy-top-banner__block text-white">
            <div
              className="GRO-logo d-flex flex-column align-items-start"
              style={{ width: "200px" }}>
              {props.appImageComp}
              <span className="">{props.title}</span>
            </div>
            <p className="">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
