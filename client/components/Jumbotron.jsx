import React from "react";
import heroImage from "../assets/images/Homepage/Hero-Image.jpg";

function Jumbotron(props) {
  const TitleComp = props.titleComp ? props.titleComp : null;
  console.log(props.title);
  let subtitleTop = props.subtitleTop ? props.subtitleTop : "";
  let className = props.class ? props.class : "";
  let link = props.link ? props.link : "";
  let styles = {
    backgroundImage: `url('${heroImage}')`
    // "url('https://d135wt97coisop.cloudfront.net/images/jumbotron-header.jpg')"
  };

  return (
    <div
      className={`jumbotron jumbotron-fluid bg-white text-dark px-5 ${className}`}
      style={styles}
    >
      {/* <img src={heroImage} /> */}
      <div className="col-sm-7 d-flex flex-column">
        <TitleComp ctaText={props.ctaText} subtitleTop={props.subtitleTop} />
      </div>
    </div>
  );
}

export default Jumbotron;
