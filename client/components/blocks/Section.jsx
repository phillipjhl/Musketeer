import React from "react";
import LazyLoad from "react-lazyload";

export default function Section(props) {
  //   console.log(props.img);
  let paragraphs = props.paragraphs.map((paragraph, i) => {
    return paragraph;
  });

  let order = props.textOrder ? props.textOrder : "";

  return (
    <section className="container mb-5">
      <div className="row">
        <div className="col-sm-6 mx-auto">
          <LazyLoad offset={100} once={true}>
            <img src={props.image} alt="" className="w-100" />
          </LazyLoad>
        </div>
        <div
          className={`col-sm-5 mx-auto d-flex flex-column justify-content-center ${order}`}>
          <h1>{props.title}</h1>
          <div>{paragraphs}</div>
          {props.children && props.children}
        </div>
      </div>
    </section>
  );
}
