import React from "react";
import LazyLoad from "react-lazyload";
import AnchorLink from "../blocks/anchorLink";
import Trail, { withTrail } from "./Trail";

const LoadWithTrail = withTrail(LazyLoad);

export default function Container(props) {
  let order = props.textOrder ? props.textOrder : 0;
  let imgOrder = props.textOrder && props.textOrder === 1 ? 0 : 1;
  let image = props.imageUrl ? props.imageUrl : props.image ? props.image : "";

  return (
    <section
      className={`container-fluid d-flex flex-column justify-content-end mnh-lg pt-5 ${props.className}`}>
      <div className="container">
        <div className="d-flex row">
          <div
            className={`col-md-5 mx-auto d-flex flex-column justify-content-center order-0 order-md-${order}`}
            style={props.style}>
            <LoadWithTrail offset={10} once>
              <h5 className="mb-2">{props.subtitle}</h5>
              <h1 className="mb-2">{props.title}</h1>
              <p className="mb-md">{props.description}</p>
              <AnchorLink
                ctaText={props.ctaText}
                ctaLink={props.ctaLink}
                className="align-self-start"
              />
            </LoadWithTrail>
            {props.children && props.children}
          </div>
          <div className={`col-md-6 mx-auto order-1 order-md-${imgOrder}`}>
            <LoadWithTrail offset={70} height={527} once>
              <img src={image} alt="" className="w-100" />
            </LoadWithTrail>
          </div>
        </div>
      </div>
    </section>
  );
}
