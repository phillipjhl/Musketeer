import React from "react";

function Jumbotron(props) {
  let title = props.title ? props.title : "WELCOME";
  let subtitle = props.subtitle ? props.subtitle : "";
  let className = props.class ? props.class : "";
  let link = props.link ? props.link : "";
  let styles = {
    backgroundImage:
      "url('https://d135wt97coisop.cloudfront.net/images/jumbotron-header.jpg')"
  };

  return (
    <div
      className={`jumbotron jumbotron-fluid bg-dark text-white ${className}`}
      style={styles}
    >
      <div className="col-sm-6 mx-auto d-flex flex-column h-100 justify-content-center align-items-center text-center">
        <h1 className="jumbotron-title">{title}</h1>
        <hr
          className="my-6 w-100 jumbotron-divide border-white"
          hidden={props.divide ? false : true}
        />
        <h5 className="jumbotron-subtitle">{subtitle}</h5>
      </div>
    </div>
  );
}

export default Jumbotron;
