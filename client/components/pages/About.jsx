import React from "react";
import Banner from "../Banner";
import AboutPhoto from "../../assets/images/AboutPhoto.png";
import Timeline from "../timeline";

export default function AboutPage(props) {
  return (
    <div>
      <section className="container my-lg">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <img src={AboutPhoto} alt="" className="w-100 mx-auto" />
          </div>
          <div className="col-12 my-lg">
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
