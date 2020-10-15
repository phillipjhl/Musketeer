import React from "react";
import Banner from "../Banner";
import Timeline from "../timeline";
import LazyLoad from "react-lazyload";

import AboutPhoto from "../../assets/images/AboutPhoto.png";
import ChairImg from "../../assets/images/About/ChairOffice.png";
import IcedCoffee from "../../assets/images/About/IcedCoffee.png";
import CorgiImg from "../../assets/images/About/Winston.png";

export default function AboutPage(props) {
  return (
    <div>
      <section className="container my-lg">
        <div className="grey-bg-img"/>
        <div className="row">
          <div className="col-md-4 mx-auto">
            <img src={AboutPhoto} alt="" className="w-100 mx-auto" />
          </div>
          <div className="col-md-9 mx-auto my-lg text-center">
            <p>
              Coming from a diverse background of design, business, and
              photography allows me to have empathy towards many different
              people and things. I specialize in Product Design, User
              Experience, and User Interface Design. ‍
            </p>
            <p>
              My design career started when I began self-taught graphic and web
              design which ultimately led me to UX/UI Design. since then I've
              been designing website for over three years. During college, I
              took on freelance design and have sense attended a UX Bootcamp to
              sharpen my design skills. ‍
            </p>
            <p>
              In the years, I've been designing campaigns and products for over
              40 clients. I designed landing pages, social media ads, motion
              graphics, email campaigns that yielded positive results.
            </p>
            <p>When I am not designing some of my favorite things include:</p>
          </div>
          <div className="row col-md-9 mx-auto ">
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
                Still using my four years of barista experience to stay
                caffeinated with iced coffee and matcha lattes.
              </p>
            </div>
            <div className="col-md-4 p-3 round-img">
              <img src={ChairImg} alt="" className="w-100 mb-3" />
              <p>Thinking of the next home project for our mid-century home.</p>
            </div>
          </div>
        </div>
      </section>
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
