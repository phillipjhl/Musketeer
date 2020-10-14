import React from "react";
import LazyLoad from "react-lazyload";

import HeroImg from "../../assets/images/GROHeroImage.png";
import GroImg from "../../assets/images/Case-Study-GRO-App/GRO-Sub-Logo-White-01.svg";
import Circle1 from "../../assets/images/DeadPlants-01.png";
import Circle2 from "../../assets/images/HandsonKeyboard-01.png";
import Circle3 from "../../assets/images/PlantTag-01.png";

import SurveyStatsImg from "../../assets/images/SurveyStats.png";
import MacImg from "../../assets/images/SurveyoniMac.png";

import InterviewImg from "../../assets/images/Interviews-01.png";
import MapImg1 from "../../assets/images/EmpathyMap-1.png";
import AffinityMap from "../../assets/images/AffinityMap2.png";
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

import Section from "../blocks/Section";

export default function CaseStudyPage(props) {
  return (
    <div className="container-fluid casestudy p-0">
      <div
        style={{
          height: "758px",
          backgroundImage: `url(${HeroImg})`,

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
        <div className="row">
          <div className="col-12 my-5">
            <h2>BACKGROUND</h2>
            <div>
              <p>
                One of my favorite things to do growing up was help my
                grandmother in her garden. I recall studying the plastic plant
                tags as she planted bright pink petunias around her bird bath.
                To my surpise, twenty years later when I began to buy plants for
                my first garden, <b>the plant tags looked no different</b>. They
                still have the sun icon to indicate the sun preferences, the
                water droplets to show how often they need to be watered, and so
                on.
              </p>

              <p>
                I quickly found that these plant tags{" "}
                <b>left a lot of questions unanswered</b> so that{" "}
                <b>caring for my plants still felt like a guessing game</b>. I
                knew there had to be abetter way. This inspired the idea for my
                project.
              </p>
            </div>
          </div>

          <div className="col-sm-6 d-flex text-left flex-column justify-content-center align-items-start">
            <h2 className="">PROBLEM</h2>
            <div>
              <p>
                Designing and maintaining a garden is challenging for new and
                experienced gardeners alike. I wanted to explore ways to help
                fellow gardeners navigate <b>the entire gardening process</b>,
                from planning the garden, purchasing plants, and caring for
                their plants.
              </p>
              <p>
                The goal of this product is to make the act of gardening more
                enjoyable, by finding solutions to{" "}
                <b>improve users success in the garden.</b>
              </p>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="cs-img__block">
              <img src={Circle1} id="circle1" className="circle" alt="" />
              <img src={Circle2} id="circle2" className="circle" alt="" />
              <img src={Circle3} id="circle3" className="circle" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bright-green text-uppercase text-white p-3 mx-5 mb-5">
        <div
          className="row justify-content-center align-items-start py-5 w-75 mx-auto"
          style={{ minHeight: "322px" }}
        >
          <div className="col-sm-4 text-right">
            <h6 className="text-bold">ROLE</h6>
            <p className="mb-5">Sole UX/UI designer</p>
            <h6 className="text-bold">PURPOSE</h6>
            <p className="mb-5">
              Project designed for Springboard’s 6 Month UX/UI Design Program.
            </p>
          </div>
          <div className="col-sm-3 mx-auto justify-content-center align-items-start opaque--8">
            <GroImg />
          </div>
          <div className="col-sm-4 text-left">
            <h6 className="text-bold">PROJECT</h6>
            <p className="mb-5">3 Month Project</p>
            <h6 className="text-bold">TOOLS USED</h6>
            <p className="m-0">Figma</p>
            <p className="m-0">Google Survey</p>
            <p className="m-0">Miro</p>
            <p className="mb-5">Zoom</p>
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
              <footer className="blockquote-footer">
                <cite title="Source Title">IAN BALWDIN, INDUSTRY ANALYST</cite>
              </footer>
            </blockquote>
          </div>
          <div className="col-sm-5 mx-auto">
            <h1>RESEARCH</h1>
            <h3>Secondary Research</h3>
            <p>
              I began research by finding studies and journals published on
              gardening, my goal during this stage was to see i
              <b>f their was a market for this type of product.</b>
            </p>
            <p>
              Once I found sufficient market research, I began to{" "}
              <b>
                discover what gardening systems and processes needed to be
                improved
              </b>
              , so I knew what to look for in the next stage, surveys.
            </p>
          </div>
        </div>
      </section>

      <section className="container mb-lg">
        <div className="row">
          <div className="col-sm-5 mx-auto">
            <h1>Screener Surveys</h1>

            <p>
              I completed a screener survey using Google Forms and shared it on
              various social and Slack channels to find potential interview
              participants.
            </p>
            <p>
              The screener questions’ purpose was to find gardeners of{" "}
              <b>varying experience</b>, that were{" "}
              <b>involved in the garden planning process</b>, and who{" "}
              <b>use their smartphone regularly</b>.
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
          <div className="col-sm-5 mx-auto">
            <LazyLoad offset={100}>
              <img src={InterviewImg} alt="" className="w-100" />
            </LazyLoad>
          </div>
          <div className="col-sm-5 mx-auto">
            <h1>Interviews</h1>
            <p>
              Five user interviews were conducted, majority of which were
              virtual meetings conducted via Zoom.
            </p>
            <p>
              The goal of the interviews was to{" "}
              <b>clarify specific pain points and challenges</b> that
              contributed to past gardening failures.
            </p>
            <p>
              Each interview began with questions to understand their gardening
              experience and what type of gardening they do (vegetable, herb,
              sensory, and so on). Once I had an idea of their experience, I
              began to dig deeper into their process of gardening from planning
              to purchasing plants to planting and maintaining their garden to
              better understand each of their biggest problem areas.
            </p>
          </div>
        </div>
      </section>

      <section className="container mb-lg">
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <h5>INTERVIEWS - EMPATHY MAPS AND FINDINGS</h5>
            <h1>Users Want A Plan, Not Planning</h1>
            <div
              className="border-left border-bright-green pl-4"
              style={{ borderLeftWidth: "3px" }}
            >
              <p>
                Garden design and layout planning was <b>not</b> a problem area.
              </p>
              <p>
                Instead, users expressed difficulty <b>finding</b> and{" "}
                <b>searching</b> for plants.
              </p>
              <p>
                Each participant desires to <b>create</b> a better{" "}
                <b>maintenance plan</b>
                for their garden.
              </p>
            </div>
          </div>
          <div className="col-sm-5 mx-auto">
            <LazyLoad offset={100}>
              <img src={MapImg1} alt="" className="w-100" />
            </LazyLoad>
          </div>
        </div>
      </section>

      <section className="container mb-lg">
        <div className="row">
          <div className="col-sm-5 mx-auto">
            <LazyLoad offset={100}>
              <img src={AffinityMap} alt="" className="w-100" />
            </LazyLoad>
          </div>
          <div className="col-sm-6 mx-auto">
            <h5>INTERVIEWS - Affinity MAPS AND FINDINGS</h5>
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
                <b>plant tag information was inadequete.</b>
              </p>
              <p>
                Each user found garden center staff generally{" "}
                <b>lacked sufficient plant knowledge.</b>
              </p>
              <p>
                Participants <b>felt the need to search online</b> to learn
                information regarding a plant.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mb-lg">
        <div className="col-12">
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
        title="Downown Daniel"
        paragraphs={[
          <p>
            Daniel’s motivation for gardening is for its{" "}
            <b>mental health benefits</b> despite his limited space.
          </p>,
          <p>
            He finds himself spending a lot of money replacing dead plants and
            is{" "}
            <b>
              feels frustrated when he cannot find reliable plant information.
            </b>
          </p>
        ]}
      />

      <Section
        image={Persona2}
        title="Idealisitc India"
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
            By thinking through each persona’s journey, user stories and a site
            map for the Minimum Viable Product were formed.
          </p>,
          <p>
            <b>
              The users’ desire for easy to find and comprehend plant
              information was the priority
            </b>{" "}
            when designing the product.
          </p>,
          <p>
            Because of this, we wanted to ensure that the search feature was
            clear and convenient.
          </p>
        ]}
      />

      <section className="container mb-lg">
        <LazyLoad offset={100}>
          <img src={SiteMap} alt="" className="w-100" />
        </LazyLoad>

        <div className="container mb-3">
          <div className="col-12">
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
        </div>

        <LazyLoad offset={100}>
          <img src={UserFlow1} alt="" className="my-5 w-100" />
        </LazyLoad>

        <LazyLoad offset={100}>
          <img src={UserFlow2} alt="" className="my-5 w-100" />
        </LazyLoad>

        <LazyLoad offset={100}>
          <img src={UserFlow3} alt="" className="my-5 w-100" />
        </LazyLoad>
      </section>

      <section className="container my-lg">
        <div className="col-12 mb-5">
          <h2>DESIGN PROCESS</h2>
          <p>
            Having established three user flows, it was time to begin ideation.
            During brainstorm sessions, rough sketches were created that served
            as a starting point to create low fidelity mockups for usability
            testing.
          </p>
        </div>

        <div className="col-12">
          <h6>SKETCHES</h6>
        </div>
        <LazyLoad offset={100}>
          <img src={Sketches} alt="" className="my-5 w-100" />
        </LazyLoad>

        <div className="col-12">
          <h6>LOW-FIDELITY MOCKUPS (ROUND ONE)</h6>
        </div>
        <LazyLoad offset={100}>
          <img src={Round1} alt="" className="my-5 w-100" />
        </LazyLoad>

        <div className="col-12">
          <h6>LOW-FIDELITY MOCKUPS (ROUND TWO)</h6>
        </div>
        <LazyLoad offset={100}>
          <img src={Round2} alt="" className="my-5 w-100" />
        </LazyLoad>

        <div className="col-12">
          <h6>HIGH-FIDELITY MOCKUPS</h6>
        </div>
        <LazyLoad offset={100}>
          <img src={HFM} alt="" className="my-5 w-100" />
        </LazyLoad>
      </section>

      <section className="container mb-lg">
        <div className="row">
          <div className="col-12">
            <h2>FINAL PRODUCT</h2>
            <p>
              Below is a break down of the plant profile to show a brief
              explanation of how this product would be successful in helping
              gardeners have more success gardening.
            </p>
          </div>

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
        <div className="col-12">
          <h2>RETROSPECTIVE</h2>
          <div>
            <p>
              By completing this project, I enjoyed getting to work through the
              entire end-to-end design process. With the magnitude of this
              project was intimidating at first, but during the process I grew
              as a designer by tackling ambiguities head-on and seeking advice
              from peers and mentors. After completing this project, I feel more
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
    </div>
  );
}
