import React from "react";
import LazyLoad from "react-lazyload";
import AnchorLink from "../blocks/anchorLink";

export default function Container(props) {
  //   console.log(props.img);

  let order = props.textOrder ? props.textOrder : 0;
  let imgOrder = props.textOrder && props.textOrder === 1 ? 0 : 1;
  let image = props.imageUrl ? props.imageUrl : props.image ? props.image : "";

  console.log(order, imgOrder);

  return (
    <section
      className={`container-fluid d-flex flex-column justify-content-end mnh-lg pt-5 ${props.className}`}>
      <div className="container">
        <div className="d-flex row">
          <div
            className={`col-md-5 mx-auto d-flex flex-column justify-content-center order-0 order-md-${order}`}
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
          <div className={`col-md-6 mx-auto order-1 order-md-${imgOrder}`}>
            <LazyLoad offset={100} height={527} once={true}>
              <img src={image} alt="" className="w-100" />
            </LazyLoad>
          </div>
        </div>
      </div>
    </section>
  );
}