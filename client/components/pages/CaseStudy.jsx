import React from "react";
import LazyLoad from "react-lazyload";
import Section from "../blocks/Section";
import Banner from "../Banner";

import HeroImg from "../../assets/images/GRO-Hero-Image.png";
import GroImg from "../../assets/images/Case-Study-GRO-App/GRO-Sub-Logo-White-01.svg";
import Circle1 from "../../assets/images/DeadPlants-01.png";
import Circle2 from "../../assets/images/HandsonKeyboard-01.png";
import Circle3 from "../../assets/images/PlantTag-01.png";

import SurveyStatsImg from "../../assets/images/SurveyStats.png";
import MacImg from "../../assets/images/SurveyoniMac.png";

import InterviewImg from "../../assets/images/Interviews-01.png";
import MapImg1 from "../../assets/images/EmpathyMap-1.png";
import AffinityMap from "../../assets/images/Affinity-Map-2.png";
import Persona1 from "../../assets/images/Persona1.png";
import Persona2 from "../../assets/images/Persona2.png";
import Persona3 from "../../assets/images/Persona3.png";
import UserStoryMapping from "../../assets/images/UserStoryMapping.png";
import SiteMap from "../../assets/images/SiteMap-01.png";
import UserFlow1 from "../../assets/images/UserFlow1.png";
import UserFlow2 from "../../assets/images/UserFlow2.png";
import UserFlow3 from "../../assets/images/UserFlow3.png";

import Round1 from "../../assets/images/RoundOne.png";
import Round2 from "../../assets/images/RoundTwo.png";
import Sketches from "../../assets/images/ProductDesignSketches.png";
import HFM from "../../assets/images/HighFidelityMockups.png";
import FinalProd2 from "../../assets/images/Frame27.png";
import FinalProd1 from "../../assets/images/Frame26.png";

import UT1 from "../../assets/images/Frame-38.png";
import UT2 from "../../assets/images/Frame-39.png";
import UT3 from "../../assets/images/Frame-40.png";
import UT4 from "../../assets/images/Frame-41.png";

export default function CaseStudyPage(props) {
  return (
    <div className="container-fluid casestudy p-0">
      <div
        style={{
          height: "758px",
          backgroundImage: `url(${HeroImg})`
        }}
        className="bg-bright-green casestudy-top"
      >
        <div className="w-100 h-100">
          <div className="casestudy-top-banner h-100 pb-5 d-flex flex-column justify-content-end align-items-start container">
            <div className="col-sm-5 mr-auto casestudy-top-banner__block text-white">
              <div
                className="GRO-logo d-flex flex-column align-items-start"
                style={{ width: "200px" }}
              >
                <GroImg />
                <span className="">GRO</span>
              </div>
              <p className="">
                GRO is a mobile app designed to help provide gardeners with
                reliable and easy-to-understand plant information to create a
                successful garden maintenance plan.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="container pt-5">
        <div className="row my-lg">
          <div className="col-md-5 mx-auto">
            <h2>BACKGROUND</h2>
            <div>
              <p>
                The timely tasks required to have an adundant and healthy garden
                can seem endless. Many gardeners struggle to know what all they
                need to do in order to keep their plants from dying. Not to
                mention, traditional gardening methods, such as garden center
                plant tags, left a lot of questions unanswered so that caring
                for plants felt like a guessing game.
              </p>
              <p className="text-bold">
                The goal of this project was to find a new way technology could
                innovate the way gardeners tend to their garden.
              </p>
            </div>
          </div>

          <div className="col-md-5 mx-auto pb-5">
            <div
              className="border-left border-bright-green pl-5"
              style={{ borderLeftWidth: "3px" }}
            >
              <h6 className="mb-0">ROLE</h6>
              <p className="mb-3">Sole Researcher and UX/UI Designer</p>
              <h6 className="mb-0">PURPOSE</h6>
              <p className="mb-3">
                Project designed for Springboard’s 6 Month UX/UI Design Program
              </p>
              <h6 className="mb-0">PROJECT</h6>
              <p className="mb-3">3 Month Project</p>
              <h6 className="mb-0">TOOLS USED</h6>
              <p className="mb-0">Figma</p>
              <p className="mb-0">Google Survey</p>
              <p className="mb-0">Miro</p>
              <p className="mb-0">Zoom</p>
            </div>
          </div>
        </div>

        <div className="row my-lg">
          <div className="col-md-5 mx-auto d-flex text-left flex-column justify-content-center align-items-start">
            <h2 className="">PROBLEM</h2>
            <div>
              Gardeners struggled to keep their plants alive due to the absence
              of tools that made plant information easy to understand and refer
              back to.{" "}
              <b>
                This lack of information made creating and sticking to a garden
                maintenance plan challenging for users.
              </b>
            </div>
          </div>

          <div className="col-md-6">
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
            <blockquote className="blockquote text-right text-bright-green text-size-large">
              <h1 className="mb-0">
                “the under 35s are now truly engaged in the full range of
                gardening activities … many of these gardeners [want] gardening
                apps.”
              </h1>
              <h4>IAN BALWDIN, INDUSTRY ANALYST</h4>
            </blockquote>
          </div>
          <div className="col-sm-5 mx-auto">
            <h1>RESEARCH</h1>
            <h3>Secondary Research</h3>
            <p>
              Research began with finding studies and journals published to see
              <b>if there was a market for this type of product.</b>
            </p>
            <p>
              After completing sufficient market research, research was
              conducted to learn various methods of{" "}
              <b>
                how users had gone about creating garden maintenance plans in
                the past
              </b>
              , before technology.
            </p>
          </div>
        </div>
      </section>

      <section className="container mb-lg">
        <div className="row">
          <div className="col-sm-5 mx-auto">
            <h1>Screener Surveys</h1>

            <p>
              The screener questions’ purpose was to find gardeners of{" "}
              <b>varying experience</b>, that were{" "}
              <b>involved in the gardening process</b>, and{" "}
              <b>use their smartphone regularly.</b>
            </p>
            <p>
              Twenty-one people completed the survey, seven of which were a good
              fit for interviews.
            </p>
            <p>
              Twenty-one people completed the survey, seven of which were a good
              fit for interviews.
            </p>
            <LazyLoad offset={100}>
              <img src={SurveyStatsImg} className="w-100" alt="" />
            </LazyLoad>
          </div>
          <div className="col-sm-5 mx-auto">
            <LazyLoad offset={100}>
              <img src={MacImg} alt="" className="w-100" />
            </LazyLoad>
          </div>
        </div>
      </section>

      <section className="container mb-lg">
        <div className="row">
          <div className="col-sm-5 mx-auto text-center">
            <LazyLoad offset={100}>
              <img src={InterviewImg} alt="" className="w-75 mx-auto" />
            </LazyLoad>
          </div>
          <div className="col-sm-5 mx-auto d-flex flex-column justify-content-center">
            <h1>Interviews</h1>
            <p>
              Five user interviews were conducted, majority of which were
              virtual meetings via Zoom.
            </p>
            <p>
              The goal of the interviews was to clarify specific pain points and
              challenges that contributed to users{" "}
              <b>trouble sticking to maintenance plans in the past.</b>
            </p>
          </div>
        </div>
      </section>

      <section className="container mb-lg">
        <div className="row">
          <div className="col-md-11 mx-auto">
            <h5>EMPATHY MAP FINDINGS</h5>
            <h1>Users Want A Plan, Not Planning</h1>
            <div
              className="border-left border-bright-green pl-4"
              style={{ borderLeftWidth: "3px" }}
            >
              <p>
                Garden design and layout planning was <b>not</b> a problem area.
              </p>
              <p>
                Instead, users expressed difficulty finding{" "}
                <b>reliable and easy to refer back to plant information.</b>
              </p>
              <p>
                Each participant expressed <b>difficulty remembering</b> when to
                do tasks in the garden.
              </p>
            </div>
          </div>
          <div className="col-md-11 mx-auto">
            <LazyLoad offset={100}>
              <img src={MapImg1} alt="" className="w-100" />
            </LazyLoad>
          </div>
        </div>
      </section>

      <section className="container mb-lg">
        <div className="row">
          <div className="col-md-11 mx-auto mb-5">
            <h5>INTERVIEWS - AFFINITY MAPS AND FINDINGS</h5>
            <h1>
              Participants Had Difficulty Finding and Comprehending Plant
              Information
            </h1>
            <div
              className="border-left border-bright-green pl-4"
              style={{ borderLeftWidth: "3px" }}
            >
              <p>
                All participants felt that{" "}
                <b>plant tag information was difficult to understand.</b>
              </p>
              <p>
                Once users found the information they were looking for, they{" "}
                <b>had trouble later recalling it.</b>
              </p>
            </div>
          </div>
          <div className="col-md-11 mx-auto">
            <LazyLoad offset={100}>
              <img src={AffinityMap} alt="" className="w-100" />
            </LazyLoad>
          </div>
        </div>
      </section>

      <section className="container mb-lg">
        <div className="col-md-11 mx-auto">
          <h2>PERSONAS</h2>
          <div>
            <p>
              After creating empathy maps, three personas began to emerge. The
              main difference between the five users was their motivation for
              gardening. Because of this, their individual needs varied despite
              their pain points being similar. I wanted to ensure three of these
              types of users were represented in my solution, so I created three
              user personas:
            </p>
          </div>
        </div>
      </section>

      <Section
        image={Persona1}
        title="Downtown Daniel"
        paragraphs={[
          <p>
            Daniel’s motivation for gardening is for its{" "}
            <b>mental health benefits</b> despite his limited space.
          </p>,
          <p>
            He finds himself spending a lot of money replacing dead plants and{" "}
            <b>
              feels frustrated when he cannot find reliable plant information.
            </b>
          </p>
        ]}
      />

      <Section
        image={Persona2}
        title="Idealistic India"
        paragraphs={[
          <p>
            India gardens to <b>increase curb appeal</b> and to{" "}
            <b>create privacy</b> from neighbors.
          </p>,
          <p>
            Her biggest challenges in the garden have been searching and finding
            plants that work in her climate and garden.
          </p>
        ]}
      />

      <Section
        image={Persona3}
        title="Knowledgable Nancy"
        paragraphs={[
          <p>
            Nancy has the most experience, and therefore success, in the garden.
          </p>,
          <p>
            She has a larger garden, which makes it more{" "}
            <b>difficult to remember to care for and maintain</b> each
            individual plant.
          </p>
        ]}
      />

      <Section
        title="USER STORIES + SITE MAP"
        image={UserStoryMapping}
        textOrder="order-first"
        paragraphs={[
          <p>
            By working through each persona’s journey, user story and a site map
            for the Minimum Viable Product was formed. The users’ desire for a
            simple way to remember specific tasks was the top priority whiloe
            designing.
          </p>,
          <p>
            Because of this,{" "}
            <b>
              we wanted to ensure that users are able to easily add recommended
              tasks for each plant then be notified when the task needed to be
              completed.
            </b>
          </p>
        ]}
      />

      <section className="container mb-lg">
        <div className="col-md-11 mx-auto">
          <LazyLoad offset={100}>
            <img src={SiteMap} alt="" className="w-100" />
          </LazyLoad>
        </div>

        <div className="row mb-3">
          <div className="col-md-11 mx-auto">
            <h2>USER FLOWS</h2>
            <div>
              <p>
                Once a site map was established, specific user flows were
                created in order to think through the steps the user would need
                to take in order to complete specific tasks established in the
                user stories stage.
              </p>
            </div>
          </div>

          <div className="col-md-11 mx-auto">
            <LazyLoad offset={100}>
              <img src={UserFlow1} alt="" className="my-5 w-100" />
            </LazyLoad>
          </div>

          <div className="col-md-11 mx-auto">
            <LazyLoad offset={100}>
              <img src={UserFlow2} alt="" className="my-5 w-100" />
            </LazyLoad>
          </div>

          <div className="col-md-11 mx-auto">
            <LazyLoad offset={100}>
              <img src={UserFlow3} alt="" className="my-5 w-100" />
            </LazyLoad>
          </div>
        </div>
      </section>

      <section className="container my-lg">
        <div className="col-md-11 mx-auto mb-5">
          <h2>DESIGN PROCESS</h2>
          <p>
            Having established three user flows, it was time to begin ideation.
            During brainstorm sessions, rough sketches were created that served
            as a starting point to create low fidelity mockups for usability
            testing.
          </p>
        </div>

        <div className="col-md-11 mx-auto">
          <h6>SKETCHES</h6>
          <LazyLoad offset={100}>
            <img src={Sketches} alt="" className="my-5 w-100" />
          </LazyLoad>
        </div>

        <div className="col-md-11 mx-auto">
          <h6>LOW-FIDELITY MOCKUPS (ROUND ONE)</h6>
          <LazyLoad offset={100}>
            <img src={Round1} alt="" className="my-5 w-100" />
          </LazyLoad>
        </div>

        <div className="col-md-11 mx-auto">
          <h6>LOW-FIDELITY MOCKUPS (ROUND TWO)</h6>
          <LazyLoad offset={100}>
            <img src={Round2} alt="" className="my-5 w-100" />
          </LazyLoad>
        </div>

        <div className="col-md-11 mx-auto">
          <h6>HIGH-FIDELITY MOCKUPS</h6>
          <LazyLoad offset={100}>
            <img src={HFM} alt="" className="my-5 w-100" />
          </LazyLoad>
        </div>
      </section>

      <section className="container mb-lg">
        <div className="row">
          <div className="col-md-11 mx-auto">
            <h2>USABILITY TESTING</h2>
            <p>
              After completing a high fidelity prototype of the app, it was time
              to test it on a group of gardeners. I performed two rounds of
              usability testing, with five participants each round. The first
              round of testing was during the low-fidelity mockup stage while
              the second was using a high-fidelity prototype. Each round of
              testing was followed by a usability test report, solution
              ideation, and a new iteration of the app.
            </p>
          </div>

          <div className="row col-md-11 mx-auto">
            <div className="col-sm-3">
              <LazyLoad offset={100}>
                <img src={UT1} alt="" className="my-5 w-100" />
              </LazyLoad>
            </div>
            <div className="col-sm-3">
              <LazyLoad offset={100}>
                <img src={UT2} alt="" className="my-5 w-100" />
              </LazyLoad>
            </div>
            <div className="col-sm-3">
              <LazyLoad offset={100}>
                <img src={UT3} alt="" className="my-5 w-100" />
              </LazyLoad>
            </div>
            <div className="col-sm-3">
              <LazyLoad offset={100}>
                <img src={UT4} alt="" className="my-5 w-100" />
              </LazyLoad>
            </div>
          </div>
        </div>
      </section>

      <section className="container mb-lg">
        <div className="row">
          <div className="col-md-11 mx-auto">
            <h2>FINAL PRODUCT</h2>
            <p>
              Below is a break down of the plant profile to show a brief
              explanation of how this product would be successful in helping
              gardeners have more success understanding plant needs in order to
              develop a maintenance plan. Once they add a plant to their “My
              Plants” section, they are recommended tasks and give reminders
              when they need to be completed.
            </p>
          </div>

          <div className="row col-md-11 mx-auto">
            <div className="col-sm-6">
              <LazyLoad offset={100}>
                <img src={FinalProd1} alt="" className="my-5 w-100" />
              </LazyLoad>
            </div>

            <div className="col-sm-6">
              <LazyLoad offset={100}>
                <img src={FinalProd2} alt="" className="my-5 w-100" />
              </LazyLoad>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-lg col-12">
        <iframe
          style={{
            minHeight: "800px",
            border: "1px solid transparent"
          }}
          width="100%"
          height="auto"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FkFkf8sHCS6RDtiSiyjLOxC%2FKatrina-s-Capstone-Project%3Fnode-id%3D376%253A52%26viewport%3D372%252C246%252C0.08919398486614227%26scaling%3Dscale-down&chrome=DOCUMENTATION"
          allowFullScreen
        ></iframe>
      </section>

      <div className="container mb-lg">
        <div className="col-md-11 mx-auto">
          <h2>RETROSPECTIVE</h2>
          <div>
            <p>
              By completing this project, I enjoyed getting to work through the
              entire end-to-end design process. The magnitude of this project
              was intimidating at first, but during the process I grew as a
              designer by tackling ambiguities head-on and seeking advice from
              peers and mentors. After completing this project, I feel more
              confident in my abilities to advocate for users and develop simple
              and intuitive designs and went on to have the opportunity to
              present this project along with its research and design solutions.
              ​
            </p>
            <p>
              If you want to hear more about this project, feel free to{" "}
              <a href="/contact" role="link" className="text-bright-green">
                contact me.
              </a>
            </p>
          </div>
        </div>
      </div>

      <Banner
        cta={"VIEW CASE STUDY"}
        subtitle={"WANT TO SEE MORE?"}
        message={
          <h2>
            Check out the <br /> RUNR App Case Study
          </h2>
        }
        link={"/casestudy/runr"}
        target={"_self"}
      />
    </div>
  );
}
