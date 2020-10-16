import React from "react";
import LazyLoad from "react-lazyload";
import Section from "../blocks/Section";
import Banner from "../Banner";

import RUNRHero from "../../assets/images/Case-Study-RUNR-App/RUNR-hero.png";
import Circle1 from "../../assets/images/Case-Study-RUNR-App/Circle-1.png";
import Circle2 from "../../assets/images/Case-Study-RUNR-App/Circle-2.png";
import Circle3 from "../../assets/images/Case-Study-RUNR-App/Circle-3.png";
import UserStats from "../../assets/images/Case-Study-RUNR-App/User-Stats.png";
import Maddie from "../../assets/images/Case-Study-RUNR-App/Maddie.png";
import Ashley from "../../assets/images/Case-Study-RUNR-App/Ashley.png";
import RUNRLogo from "../../assets/images/Case-Study-RUNR-App/RUNR-logo.png";
import AffinityMap from "../../assets/images/Case-Study-RUNR-App/Affinity-Map.png";
import Sketches from "../../assets/images/Case-Study-RUNR-App/Sketches.png";
import LowFidelity from "../../assets/images/Case-Study-RUNR-App/Low-Fidelity.png";
import HighFidelity from "../../assets/images/Case-Study-RUNR-App/High-Fidelity.png";

export default function RunrPage(props) {
  return (
    <div className="container-fluid casestudy casestudy--runr p-0">
      <div
        style={{
          height: "758px",
          backgroundImage: `url(${RUNRHero})`
        }}
        className="bg-runr-blue casestudy-top"
      >
        <div className="w-100 h-100">
          <div className="casestudy-top-banner h-100 pb-5 d-flex flex-column justify-content-end align-items-start container">
            <div className="col-sm-5 mr-auto casestudy-top-banner__block text-white">
              <div
                className="GRO-logo d-flex flex-column align-items-start"
                style={{ width: "200px" }}
              >
                <img src={RUNRLogo} alt="" />
                <span className="">RUNR</span>
              </div>
              <h6 className="text-bold">
                RUNR is a social health tracking app designed to motivate users
                to get active while staying social and tracking their progress.
              </h6>
            </div>
          </div>
        </div>
      </div>

      <section className="container pt-5">
        <div className="row mb-lg">
          <div className="col-md-5 mx-auto">
            <h2>BACKGROUND</h2>
            <div>
              <p>
                A health and fitness company, launched a{" "}
                <b>social health tracking app</b>, called RUNR, that allows
                users within a group (a family or group of friends) to see how
                others within the group are doing regarding health and fitness.
                On average, user engagement is heavy for the first three weeks
                then it drops off and soon after users delete the app. For this
                project,{" "}
                <b>
                  I was presented with the challenge of increasing user
                  engagement by designing new messaging features.
                </b>
              </p>
            </div>
          </div>

          <div className="col-md-5 mx-auto pb-5">
            <div
              className="border-left border-runr-blue pl-5 h-100 d-flex flex-column justify-content-center"
              style={{ borderLeftWidth: "3px" }}
            >
              <h6 className="mb-0">ROLE</h6>
              <p className="mb-3">UX Research + Design</p>
              <h6 className="mb-0">PURPOSE</h6>
              <p className="mb-3">
                Project designed for Springboard’s UX/UI Design Program
              </p>
              <h6 className="mb-0">TOOLS USED</h6>
              <p className="mb-0">Figma</p>
            </div>
          </div>
        </div>

        <div className="row mb-lg">
          <div className="row col-md-5 mx-auto">
            <div className="col-12 mx-auto d-flex text-left flex-column justify-content-center align-items-start">
              <h2 className="">PROBLEM</h2>
              <div
                className="border-left border-runr-blue pl-4"
                style={{ borderLeftWidth: "3px" }}
              >
                <p>
                  Users engagement in this app declined weeks after downloading
                  the app{" "}
                  <b>
                    because they were unable to find other users who shared the
                    same health and fitness goals.
                  </b>
                </p>
              </div>
            </div>

            <div className="col-12 mx-auto d-flex text-left flex-column justify-content-center align-items-start">
              <h2 className="">PROJECT GOALS</h2>
              <div
                className="border-left border-runr-blue pl-4"
                style={{ borderLeftWidth: "3px" }}
              >
                <p>
                  Find ways for users to stay motivated and engaged in the app
                  by connecting with others with similar interests and goals.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-5 mx-auto ">
            <div className="cs-img__block">
              <img src={Circle1} id="circle1" className="circle" alt="" />
              <img src={Circle2} id="circle2" className="circle" alt="" />
              <img src={Circle3} id="circle3" className="circle" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="container text-dark my-lg">
        <div className="row">
          <div className="col-sm-5 mx-auto">
            <blockquote className="blockquote text-right text-runr-blue text-size-large">
              <h1 className="mb-3">
                “...just watching other people workout motivates me to hit the
                gym.”
              </h1>
              <h4>ASHLEY GAITA</h4>
            </blockquote>
          </div>
          <div className="col-sm-5 mx-auto">
            <h1>RESEARCH</h1>
            <h3>Secondary Research</h3>
            <p>
              The discover stage began by conducting a SWOT analysis to have a
              better understanding of the market, both in the social media and
              fitness industries.
            </p>
          </div>
        </div>
      </section>

      <section className="container mb-lg">
        <div className="row">
          <div className="col-sm-5 mx-auto">
            <h1>Interviews</h1>
            <p>
              Three users were interviewed, all of who were a good fit for this
              app based on the target audience:
            </p>

            <div
              className="border-left border-runr-blue pl-4"
              style={{ borderLeftWidth: "3px" }}
            >
              <p>18 - 34 years old</p>
              <p>Tech-savvy</p>
              <p>Budget-conscious</p>
              <p>Communicating with friends and family is a very important</p>
            </div>
          </div>
          <div className="col-sm-5 mx-auto">
            <LazyLoad offset={100}>
              <img src={UserStats} alt="" className="w-100" />
            </LazyLoad>
          </div>
        </div>
      </section>

      <section className="container mb-lg">
        <div className="col-md-11 mx-auto">
          <LazyLoad offset={100}>
            <img src={AffinityMap} alt="" className="w-100" />
          </LazyLoad>
        </div>
      </section>

      <section className="container mb-lg">
        <div className="row">
          <div className="col-md-11 mx-auto mb-5">
            <h5>INTERVIEWS + AFFINITY MAPS AND FINDINGS</h5>
            <h1>Participants Want to Share Progress and Achievements</h1>
            <div
              className="border-left border-runr-blue pl-4"
              style={{ borderLeftWidth: "3px" }}
            >
              <p>
                Each participant expressed{" "}
                <b>a desire to participate in challenges</b>, which varied based
                on their individual interests.
              </p>
              <p>
                Enjoyed the motivation of{" "}
                <b>working towards fitness goals with others.</b>
              </p>
              <p>
                The majority of participants expressed a desire to{" "}
                <b>try new experiences and activities.</b>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mb-lg">
        <div className="col-md-11 mx-auto">
          <h2>PERSONAS</h2>
          <div>
            <p>
              Through interviews, two main personas began to emerge. The main
              difference between the users was what motivated them to stay fit
              and maintain a healthy lifestyle. I wanted to ensure each of these
              types of users were represented in my solution, so I created two
              user personas:
            </p>
          </div>
        </div>
      </section>

      <Section
        image={Maddie}
        title="Maddie, The Cardio Junkie"
        paragraphs={[
          <p key={1}>
            Maddie began her fitness journey simply with the goal to lose weight
            but soon found that she loved the feeling of working out and pushing
            herself.
          </p>,
          <p key={2}>
            Her biggest motivator when she first began her health and fitness
            journey was her workout buddy.{" "}
            <b>
              Sharing recipes, progress photos, and favorite workout routines
              helped her to feel inspired to stick to her new “lifestyle.”
            </b>
          </p>
        ]}
      />

      <Section
        image={Ashley}
        title="Ashley, The Adventurous"
        paragraphs={[
          <p key={1}>
            For Ashley, her motivation to be active is not to lose weight or
            improve her physique. Her love for adventure and socializing is the
            reason she participates in frequent hiking trips and team sports
            throughout the year.
          </p>,
          <p key={2}>
            Her desire to connect (and compete) with others motivates her to be
            active and involved in group fitness activities.
          </p>
        ]}
      />

      <section className="container mb-lg">
        <div className="row">
          <div className="col-md-11 mx-auto mb-5">
            <h2>DESIGN PROCESS</h2>
            <p>
              Once a flow was established rough sketches were created to think
              through the best designs given the problem. The final sketches
              became a guide to create low and high fidelity mockups.{" "}
            </p>
          </div>

          <div className="col-md-9 mx-auto mb-5">
            <h6 className="mb-3">ROUGH SKETCHES</h6>
            <LazyLoad offset={100}>
              <img src={Sketches} alt="" className="w-100" />
            </LazyLoad>
          </div>

          <div className="col-md-9 mx-auto">
            <h6 className="mb-3">LOW-FIDELITY MOCKUPS</h6>
            <LazyLoad offset={100}>
              <img src={LowFidelity} alt="" className="w-100" />
            </LazyLoad>
          </div>

          <div className="col-md-9 mx-auto">
            <h6 className="mb-3">HIGH-FIDELITY MOCKUPS</h6>
            <LazyLoad offset={100}>
              <img src={HighFidelity} alt="" className="w-100" />
            </LazyLoad>
          </div>

          <div className="col-md-11 mx-auto mb-5">
            <h2>FINAL PRODUCT</h2>
            <p>
              The final product successfully allowed users to find people and
              groups with shared health and fitness goals by including a “For
              You” feed that includes posts related to the users interests
              indicated.
            </p>
          </div>
        </div>
      </section>

      <Banner
        cta={"VIEW CASE STUDY"}
        subtitle={"WANT TO SEE MORE?"}
        message={
          <h2>
            Check out the <br /> GRO App Case Study
          </h2>
        }
        link={"/casestudy/gro"}
        target={"_self"}
      />
    </div>
  );
}
