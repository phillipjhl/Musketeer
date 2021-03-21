import React from "react";
import LazyLoad from "react-lazyload";
import AnchorLink from "../blocks/anchorLink";

export default function Section(props) {
  //   console.log(props.img);

  let order = props.textOrder ? props.textOrder : 0;
  let imgOrder = props.textOrder && props.textOrder === 0 ? 1 : 1;
  let image = props.imageUrl ? props.imageUrl : props.image ? props.image : "";

  return (
    <section
      className={`container-fluid d-flex flex-column justify-content-end mnh-lg ${props.className}`}>
      <div className="container">
        <div className="d-flex row">
          <div className={`col-sm-6 mx-auto order-${imgOrder}`}>
            <LazyLoad offset={100} height={527} once={true}>
              <img src={image} alt="" className="w-100" />
            </LazyLoad>
          </div>
          <div
            className={`col-sm-5 mx-auto d-flex flex-column justify-content-center order-${order}`}
            style={props.style}>
            <h5 className="mb-2">{props.subtitle}</h5>
            <h1 className="mb-2">{props.title}</h1>
            <p className="mb-md">{props.description}</p>
            <AnchorLink
              ctaText={props.ctaText}
              ctaLink={props.ctaLink}
              className="align-self-start"
            />
            {props.children && props.children}
          </div>
        </div>
      </div>
    </section>
  );
}
