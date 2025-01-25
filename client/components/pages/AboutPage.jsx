import React from "react";
import Banner from "./sub-comps/Banner";
import Timeline from "./sub-comps/timeline";

import AboutPhoto from "../../assets/images/AboutPhoto.png";
// import ChairImg from "../../assets/images/About/ChairOffice.png";
// import IcedCoffee from "../../assets/images/About/IcedCoffee.png";
// import CorgiImg from "../../assets/images/About/Winston.png";

export default function AboutPage(props) {
  return (
    <div>
      <div className="w-100 bg-light">
        <section className="container my-lg p-sm-0 p-md-5">
          {/* <div className="grey-bg-img" /> */}
          <div className="row py-5">
            <div className="col-md-4 pb-5">
              <img src={AboutPhoto} alt="" className="w-100 mx-auto" />
            </div>
            <div className="col-md-7 mx-auto pb-5 d-flex flex-column justify-content-center">
              <h1>About</h1>
              <p>
                Hi! Thanks for stopping by. I am an end-to-end product designer
                based in Birmingham, Alabama. I am passionate about solving
                complex problems through simple solutions.{" "}
                <b>
                  My curiosity for the world around me along with my diverse
                  background in design, business, and photography allows me to
                  connect with and understand people.
                </b>
              </p>
              <p>
                I'm always trying to grow and learn something new. Brainstorming
                sessions and collaborating with a team are my favorite. When I
                am not conducting research or designing in Figma, I spend my
                time practicing my film photography or outdoors gardening
                alongside my corgi, Winston.
              </p>
              <p>
                I am currently looking for new opportunities. Please don't
                hesitate to reach out— I'm always happy to chat!
              </p>
            </div>
            <div className="col-12 row py-5">
              <div className="col-md-4 px-md-5 text-md-right px-3">
                <h1>
                 Favorite Things 
                </h1>
              </div>
              <div className="col-md-8 row px-md-5 border-left border-dark">
                <div className="col-md-6 p-0">
                  <h4>BOOKS</h4>
                  <p>
                    <i>Goodbye, Things: The New Japanese Minimalism</i> By Fumio
                    Sasaki
                  </p>
                  <p>
                    <i>The Design of Everyday Things</i> By Don Norman
                  </p>
                </div>
                <div className="col-md-6 p-0">
                  <h4>INTERESTS</h4>
                  <p>Sustainability</p>
                  <p>Gardening</p>
                  <p>Inclusive Design</p>
                </div>
                <div className="col-md-6 p-0">
                  <h4>SHOWS</h4>
                  <p>Severance</p>
                  <p>The Mandolorian</p>
                  <p>The Good Place</p>
                </div>
                <div className="col-md-6 p-0">
                  <h4>LEARNING</h4>
                  <p>Currently trying to master a killer sourdough</p>
                </div>
              </div>
            </div>
            {/* <div className="row col-md-9 mx-auto ">
              <div className="col-12 text-center">
                <h1>Favorite Things</h1>
              </div>
              <div className="col-md-4 p-3 round-img">
                <img src={CorgiImg} alt="" className="w-100 mb-3" />
                <p>
                  Family park visits with our corgi, Winston, complete with
                  frisbee tosses.
                </p>
              </div>
              <div className="col-md-4 p-3 round-img">
                <img src={IcedCoffee} alt="" className="w-100 mb-3" />
                <p>
                  Using my four years of barista experience to stay caffeinated
                  with iced coffee and matcha lattes.
                </p>
              </div>
              <div className="col-md-4 p-3 round-img">
                <img src={ChairImg} alt="" className="w-100 mb-3" />
                <p>
                  Thinking of the next home project for our mid-century home.
                </p>
              </div>
            </div> */}
          </div>
        </section>
      </div>
      <section className="container my-lg">
        <Timeline />
      </section>
      <Banner
        subtitle={"RESUME"}
        message={
          <h2>
            Want to learn more about my
            <br />
            experience? Download my resume.
          </h2>
        }
        cta={"VIEW RESUME"}
      />
    </div>
  );
}
