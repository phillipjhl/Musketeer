import React from "react";
import ContactForm from "../contactForm";
// import Jumbotron from "../Jumbotron";
// import JumboTitle from "../blocks/JumboTitle";
// import Dash from "../Dash";
// import Banner from "../Banner";

export default function ContactPage(props) {
  return (
    <section className="container my-lg">
      <div className="row">
        <div className="col-md-12">
          <h1>Contact Me</h1>
          {props.message && <p>{props.message}</p>}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
