import React from "react";

export default function Section(props) {
//   console.log(props.img);
  let paragraphs = props.paragraphs.map((p, i) => {
    return <p key={i}>{p}</p>;
  });

  let order = props.textOrder ? props.textOrder : "";

  return (
    <section className="container mb-lg">
      <div className="row">
        <div className="col-sm-5 mx-auto">
          <img src={props.image} alt="" className="w-100" />
        </div>
        <div className={`col-sm-5 mx-auto d-flex flex-column justify-content-center ${order}`}>
          <h1>{props.title}</h1>
          {paragraphs}
          {props.children && props.children}
        </div>
      </div>
    </section>
  );
}
