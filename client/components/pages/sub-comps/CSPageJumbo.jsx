import React from "react";

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
        height: "758px",
        backgroundImage: `url(${props.heroImage})`
      }}
      className={`${props.className} casestudy-top`}>
      <div className="w-100 h-100">
        <div className="casestudy-top-banner h-100 pb-5 d-flex flex-column justify-content-end align-items-start container">
          <div className="col-sm-5 mr-auto casestudy-top-banner__block">
            <div
              className="GRO-logo d-flex flex-column align-items-start"
              style={imageStyle}>
              {props.appImageComp && props.appImageComp}
              {title}
            </div>
            <p className="">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
