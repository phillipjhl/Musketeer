import React from "react";
import LazyLoad from "react-lazyload";
import Section from "./sub-comps/Section";
import Banner from "./sub-comps/Banner";

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
// import FinalProduct from "../../assets/images/Case-Study-RUNR-App/RUNR-Final-Product.png";
import UserR1 from "../../assets/images/Case-Study-RUNR-App/User-Experience-Refinement-1.png";
import UserR2 from "../../assets/images/Case-Study-RUNR-App/User-Experience-Refinement-2.png";
import FD1 from "../../assets/images/Case-Study-RUNR-App/Final-Design-1.png";
import FD2 from "../../assets/images/Case-Study-RUNR-App/Final-Design-2.png";
import FD3 from "../../assets/images/Case-Study-RUNR-App/Final-Design-3.png";
import FD4 from "../../assets/images/Case-Study-RUNR-App/Final-Design-4.png";
import FD5 from "../../assets/images/Case-Study-RUNR-App/Final-Design-5.png";
import FD6 from "../../assets/images/Case-Study-RUNR-App/Final-Design-6.png";
import { withTrail } from "../blocks/Trail";
import CaseStudyPageWrapper from "./CaseStudyPageWrapper";

const LazyLoadWithTrail = withTrail(LazyLoad);

export default function RunrPage(props) {
  return (
    <CaseStudyPageWrapper
      className="casestudy--runr"
      bottomBannerMessage={
        <h2>
          Check out the <br /> GRO App Case Study
        </h2>
      }
      bottomBannerLink={"/casestudy/gro"}
      jumboProps={{
        className: "bg-runr-blue",
        heroImage: RUNRHero,
        appImageComp: <img src={RUNRLogo} alt="" />,
        title: "RUNR",
        description:
          "RUNR is a social health tracking app designed to motivate users to get active while staying social and tracking their progress."
      }}>
      <section className="container pt-5">
        <div className="row pb-5">
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
                  engagement.
                </b>
              </p>
            </div>
          </div>

          <div className="col-md-5 mx-auto pb-5">
            <div
              className="border-left border-runr-blue pl-5 h-100 d-flex flex-column justify-content-center"
              style={{ borderLeftWidth: "3px" }}>
              <h6 className="mb-0">ROLE</h6>
              <p className="mb-3">Sole UX Researcher + Designer</p>
              <h6 className="mb-0">PURPOSE</h6>
              <p className="mb-3">
                Project designed for Springboard’s UX/UI Design Program
              </p>
              <h6 className="mb-0">TOOLS USED</h6>
              <p className="mb-0">Figma</p>
            </div>
          </div>
        </div>

        <div className="row pb-5">
          <div className="row col-md-5 p-0 mx-auto">
            <div className="col-12 mx-auto d-flex text-left flex-column justify-content-center align-items-start">
              <h2 className="">PROJECT GOALS</h2>
              <div
                className="border-left border-runr-blue pl-4"
                style={{ borderLeftWidth: "3px" }}>
                <p>
                  Find ways for users to stay motivated and engaged in the app
                  by connecting with others with similar interests and goals.
                </p>
              </div>
            </div>

            <div className="col-12 mx-auto d-flex text-left flex-column justify-content-center align-items-start">
              <h2 className="">PROBLEM</h2>
              <div
                className="border-left border-runr-blue pl-4"
                style={{ borderLeftWidth: "3px" }}>
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
              <h2 className="">SOLUTION</h2>
              <div
                className="border-left border-runr-blue pl-4"
                style={{ borderLeftWidth: "3px" }}>
                <p>
                  Added a “For You” feed on the homepage to show users content
                  that aligned with their fitness goals and interests.
                </p>
                <p>
                  Added a Groups feature to easily connect with users who
                  participate in similar activies.
                </p>
                <p>
                  Integrated a “Challenges” feature so users can easily track
                  their progress and connect with others working towards the
                  same goal.
                </p>
                <a href="#final-product" role="link" className="text-dark">
                  SEE FINAL DESIGN
                </a>
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
              <h2 className="mb-3">
                “...just watching other people workout motivates me to hit the
                gym.”
              </h2>
              <h4>ASHLEY GAITA</h4>
            </blockquote>
          </div>
          <div className="col-sm-5 mx-auto">
            <h2>RESEARCH</h2>
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
            <h2>Interviews</h2>
            <p>
              Three users were interviewed, all of whom were a good fit for this
              app based on the target audience:
            </p>

            <div
              className="border-left border-runr-blue pl-4"
              style={{ borderLeftWidth: "3px" }}>
              <p>18 - 34 years old</p>
              <p>Tech-savvy</p>
              <p>Budget-conscious</p>
              <p>Communicating with friends and family is very important</p>
            </div>
          </div>
          <div className="col-sm-5 mx-auto">
            <LazyLoadWithTrail once offset={100} height={280}>
              <img src={UserStats} alt="" className="w-100" />
            </LazyLoadWithTrail>
          </div>
        </div>
      </section>

      <section className="container mb-lg">
        <div className="col-md-11 mx-auto">
          <LazyLoadWithTrail once offset={100} height={1225}>
            <img src={AffinityMap} alt="" className="w-100" />
          </LazyLoadWithTrail>
        </div>
      </section>

      <section className="container mb-lg">
        <div className="row">
          <div className="col-md-11 mx-auto mb-5">
            <h5>INTERVIEWS + AFFINITY MAPS AND FINDINGS</h5>
            <h2>Participants Want to Share Progress and Achievements</h2>
            <div
              className="border-left border-runr-blue pl-4"
              style={{ borderLeftWidth: "3px" }}>
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
            <LazyLoadWithTrail once offset={100} height={476}>
              <img src={Sketches} alt="" className="w-100" />
            </LazyLoadWithTrail>
          </div>

          <div className="col-md-9 mx-auto">
            <h6 className="mb-3">LOW-FIDELITY MOCKUPS</h6>
            <LazyLoadWithTrail once offset={100} height={647}>
              <img src={LowFidelity} alt="" className="w-100" />
            </LazyLoadWithTrail>
          </div>

          <div className="col-md-9 mx-auto">
            <h6 className="mb-3">HIGH-FIDELITY MOCKUPS</h6>
            <LazyLoadWithTrail once offset={100} height={647}>
              <img src={HighFidelity} alt="" className="w-100" />
            </LazyLoadWithTrail>
          </div>
        </div>
      </section>

      <section className="container mb-lg">
        <div className="row">
          <div className="col-md-11 mx-auto mb-5">
            <h2>REFINEMENT</h2>
            <p>
              Continuously improving products and user experience is an
              important, ongoing part of the design process. It was obvious that
              the inital design’s engagement could be further improved and
              fitness goals and interests more clearly displayed. Thus, during
              the refinement stage, a new “Challenges” feature was added.{" "}
            </p>
          </div>

          <div className="col-md-5 mx-auto">
            <LazyLoadWithTrail once offset={100} once>
              <img src={UserR1} alt="" className="w-100" />
            </LazyLoadWithTrail>
          </div>

          <div className="col-md-5 mx-auto">
            <LazyLoadWithTrail once offset={100} once>
              <img src={UserR2} alt="" className="w-100" />
            </LazyLoadWithTrail>
          </div>
        </div>
      </section>

      <section id="final-product" className="container mb-lg">
        <div className="row">
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

        <div className="row col-md-11 mx-auto mb-5">
          <div className="col-md-4 mb-5 d-flex justify-content-end flex-column">
            <LazyLoadWithTrail once offset={100} height={351}>
              <img src={FD1} alt="" className="w-75" />
            </LazyLoadWithTrail>
          </div>
          <div className="col-md-4 mb-5">
            <LazyLoadWithTrail once offset={100} height={351}>
              <img src={FD2} alt="" className="w-75" />
            </LazyLoadWithTrail>
            <h4>Tailored Content</h4>
            <p>
              Users decide the content they wish to see based on their interests
              and fitness goals.
            </p>
          </div>

          <div className="col-md-4 mb-5">
            <h4>See What You Want</h4>
            <p>
              Users are presented with two feeds to view content: a “For You”
              feed based on the user’s interests and goals indicated during
              onboarding and a “Following” feed which shows posts from Groups
              the user is actively following.
            </p>
            <LazyLoadWithTrail once offset={100} height={351}>
              <img src={FD3} alt="" className="w-75" />
            </LazyLoadWithTrail>
          </div>
        </div>

        <div className="row col-md-11 mx-auto">
          <div className="col-md-4 mb-5">
            <LazyLoadWithTrail once offset={100} height={351}>
              <img src={FD4} alt="" className="w-75" />
            </LazyLoadWithTrail>
            <h4>Join Groups</h4>
            <p>
              Users are able to join groups based on common interests to connect
              with other users.
            </p>
          </div>

          <div className="col-md-4 mb-5">
            <h4>Join Challenges</h4>
            <p>
              Research showed that users enjoy participating in challenges,
              adding challenges within groups engages users while motivating
              them to reach fitness goals.
            </p>
            <LazyLoadWithTrail once offset={100} height={351}>
              <img src={FD5} alt="" className="w-75" />
            </LazyLoadWithTrail>
          </div>

          <div className="col-md-4 mb-5">
            <LazyLoadWithTrail once offset={100} height={351}>
              <img src={FD6} alt="" className="w-75" />
            </LazyLoadWithTrail>
            <h4>Share Progress</h4>
            <p>
              Users are able to share their progress with followers. This
              feature increases motivation by adding accountability and making
              it easy for other users to engage and encourage eachother.
            </p>
          </div>
        </div>
      </section>

      <section className="container mb-lg">
        <div className="row">
          <div className="col-md-11 mx-auto mb-3">
            <h2>RETROSPECTIVE</h2>
            <p>
              I learned a lot by completing this project, from learning how to
              ask better questions during interviews and pay attentions to
              users’ non-verbal responses and how to better phrase tasks for
              users to perform during usability testing.
            </p>
          </div>

          <div className="col-md-11 mx-auto mb-3">
            <h3>The Importance of Understanding User’s Motivations</h3>
            <p>
              The biggest takeaway from this project was just how important it
              is to not just understand the problems users face, but their “why”
              behind what they do. I never would have come up with the idea for
              the challenges feature had I not truly “dug” into each users
              motivation for staying fit and how they enjoy going about creating
              and reaching their fitness and health goals.
            </p>
          </div>

          <div className="col-md-11 mx-auto mb-3">
            <h3>Copy is Key</h3>
            <p>
              Prior to usability testing for this project, I found myself
              focusing on the visuals of each screen, how prominent the button
              is, the visual hierarchy, the use of visuals, etc. but during
              testing, I realized how important copy is to the user. For
              instance, in the first iteration of the app, on the Group page the
              button simply said “Join.” Little did I know that this button
              could be confusing, especially when the user was on the
              “Challenges” view of the group, they may think they were joining
              the challenge rather than the entire group. The solution to this
              problem was simply by changing the copy to “Join Group.”
            </p>
          </div>
        </div>
      </section>
    </CaseStudyPageWrapper>
  );
}
