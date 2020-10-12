import React from "react";
import HeroImg from "../../assets/images/Case-Study-GRO-App/Hero-Image.jpg";
import GroImg from "../../assets/images/Case-Study-GRO-App/GRO-Sub-Logo-White-01.svg";
import Circle1 from "../../assets/images/Case-Study-GRO-App/Dead-Plants-01.png";
import Circle2 from "../../assets/images/Case-Study-GRO-App/Hands-on-Keyboard-01.png";
import Circle3 from "../../assets/images/Case-Study-GRO-App/Plant-Tag-01.png";

import SurveyStatsImg from "../../assets/images/Case-Study-GRO-App/Survey-Stats.png";
import MacImg from "../../assets/images/Case-Study-GRO-App/Survey-on-iMac.png";

import InterviewImg from "../../assets/images/Case-Study-GRO-App/Interviews-01.png";
import MapImg1 from "../../assets/images/Case-Study-GRO-App/Empathy-Map-1.png";
import AffinityMap from "../../assets/images/Case-Study-GRO-App/AffinityMap2.png";
import Persona1 from "../../assets/images/Case-Study-GRO-App/Persona1.png";
import Persona2 from "../../assets/images/Case-Study-GRO-App/Persona2.png";
import Persona3 from "../../assets/images/Case-Study-GRO-App/Persona3.png";
import UserStoryMapping from "../../assets/images/Case-Study-GRO-App/UserStoryMapping.png";
import SiteMap from "../../assets/images/Case-Study-GRO-App/SiteMap-01.png";
import UserFlow1 from "../../assets/images/Case-Study-GRO-App/UserFlow1.png";
import UserFlow2 from "../../assets/images/Case-Study-GRO-App/UserFlow2.png";
import UserFlow3 from "../../assets/images/Case-Study-GRO-App/UserFlow3.png";

import Section from "../blocks/Section";

export default function CaseStudyPage(props) {
  return (
    <main>
      <div className="container-fluid p-0">
        <div
          style={{
            height: "758px",
            backgroundImage: `url(${HeroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            margin: "1rem 3rem"
          }}
          className=""
        >
          <div className="w-100 h-100 bg-black-transp">
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
                  To my surpise, twenty years later when I began to buy plants
                  for my first garden, the plant tags looked no different. They
                  still have the sun icon to indicate the sun preferences, the
                  water droplets to show how often they need to be watered, and
                  so on.
                </p>

                <p>
                  I quickly found that these plant tags left a lot of questions
                  unanswered so that caring for my plants still felt like a
                  guessing game. I knew there had to be abetter way. This
                  inspired the idea for my project.
                </p>
              </div>
            </div>

            <div className="col-sm-6 d-flex text-left flex-column justify-content-center align-items-start">
              <h2 className="">PROBLEM</h2>
              <div>
                <p>
                  Designing and maintaining a garden is challenging for new and
                  experienced gardeners alike. I wanted to explore ways to help
                  fellow gardeners navigate the process of planning and caring
                  for their plants.
                </p>
                <p>
                  The goal of this product is to make the act of gardening more
                  enjoyable, by finding solutions to improve users success in
                  the garden.
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
              <blockquote class="blockquote text-right text-bright-green text-size-large">
                <h1 class="mb-0">
                  “the under 35s are now truly engaged in the full range of
                  gardening activities … many of these gardeners [want]
                  gardening apps.”
                </h1>
                <footer class="blockquote-footer">
                  <cite title="Source Title">
                    IAN BALWDIN, INDUSTRY ANALYST
                  </cite>
                </footer>
              </blockquote>
            </div>
            <div className="col-sm-5 mx-auto">
              <h1>RESEARCH</h1>
              <h3>Secondary Research</h3>
              <p>
                I began research by finding studies and journals published on
                gardening, my goal during this stage was to see if their was a
                market for this type of product.
              </p>
              <p>
                Once I found sufficient market research, I began to discover
                what gardening systems and processes needed to be improved, so I
                knew what to look for in the next stage, surveys.
              </p>
            </div>
          </div>
        </section>

        <section className="container mb-lg">
          <div className="row">
            <div className="col-sm-5 mx-auto">
              <h1>Screener Surveys</h1>

              <p>
                I completed a screener survey using Google Forms and shared it
                on various social and Slack channels to find potential interview
                participants.
              </p>
              <p>
                The screener questions’ purpose was to find gardeners of varying
                experience, that were involved in the garden planning process,
                and who use their smartphone regularly.
              </p>
              <p>
                Twenty-one people completed the survey, seven of which were a
                good fit for interviews.
              </p>
              <img src={SurveyStatsImg} className="w-100" alt="" />
            </div>
            <div className="col-sm-5 mx-auto">
              <img src={MacImg} alt="" className="w-100" />
            </div>
          </div>
        </section>

        <section className="container mb-lg">
          <div className="row">
            <div className="col-sm-5 mx-auto">
              <img src={InterviewImg} alt="" className="w-100" />
            </div>
            <div className="col-sm-5 mx-auto">
              <h1>Interviews</h1>
              <p>
                Five user interviews were conducted, majority of which were
                virtual meetings conducted via Zoom.
              </p>
              <p>
                The goal of the interviews was to clarify specific pain points
                and challenges that contributed to past gardening failures.
              </p>
              <p>
                Each interview began with questions to understand their
                gardening experience and what type of gardening they do
                (vegetable, herb, sensory, and so on). Once I had an idea of
                their experience, I began to dig deeper into their process of
                gardening from planning to purchasing plants to planting and
                maintaining their garden to better understand each of their
                biggest problem areas.
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
                <p>Garden design and layout planning was not a problem area.</p>
                <p>
                  Instead, users expressed difficulty finding and searching for
                  plants.
                </p>
                <p>
                  Each participant desires to create a better maintenance plan
                  for their garden.
                </p>
              </div>
            </div>
            <div className="col-sm-5 mx-auto">
              <img src={MapImg1} alt="" className="w-100" />
            </div>
          </div>
        </section>

        <section className="container mb-lg">
          <div className="row">
            <div className="col-sm-5 mx-auto">
              <img src={AffinityMap} alt="" className="w-100" />
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
                  All participants felt that plant tag information was
                  inadequete.
                </p>
                <p>
                  Each user found garden center staff generally lacked
                  sufficient plant knowledge.
                </p>
                <p>
                  Participants felt the need to search online to learn
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
                gardening. Because of this, their individual needs varied
                despite their pain points being similar. I wanted to ensure
                three of these types of users were represented in my solution,
                so I created three user personas:
              </p>
            </div>
          </div>
        </section>

        <Section
          image={Persona1}
          title="Downown Daniel"
          paragraphs={[
            "Daniel’s motivation for gardening is for its mental health benefits despite his limited space.",
            "He finds himself spending a lot of money replacing dead plants and is feels frustrated when he cannot find reliable plant information."
          ]}
        />

        <Section
          image={Persona2}
          title="Idealisitc India"
          paragraphs={[
            "India gardens to increase increase curb appeal and to create privacy from neighbors.",
            "Her biggest challenges in the garden have been searching and finding plants that work in her climate and garden."
          ]}
        />

        <Section
          image={Persona3}
          title="Knowledgable Nancy"
          paragraphs={[
            "Nancy has the most experience, and therefore success, in the garden.",
            "She has a larger garden, which makes it more difficult to remember to care for and maintain each individual plant."
          ]}
        />

        <Section
          title="USER STORIES + SITE MAP"
          image={UserStoryMapping}
          textOrder="order-first"
          paragraphs={[
            "By thinking through each persona’s journey, user stories and a site map for the Minimum Viable Product were formed. ",
            "The users’ desire for easy to find and comprehend plant information was the priority when designing the product.",
            "Because of this, we wanted to ensure that the search feature was clear and convenient."
          ]}
        />

        <section className="container mb-lg">
          <img src={SiteMap} alt="" className="w-100" />

          <div className="container mb-lg">
            <div className="col-12">
              <h2>USER FLOWS</h2>
              <div>
                <p>
                  Once a site map was established, specific user flows were
                  created in order to think through the steps the user would
                  need to take in order to complete specific tasks established
                  in the user stories stage.
                </p>
              </div>
            </div>
          </div>

          <img src={UserFlow1} alt="" className="my-5 w-100" />

          <img src={UserFlow2} alt="" className="my-5 w-100" />

          <img src={UserFlow3} alt="" className="my-5 w-100" />
        </section>

        <section className="container mb-lg">
          <div className="col-12">
            <h2>DESIGN PROCESS</h2>
            <div>
              <p>
                Having established three user flows, it was time to begin
                ideation. During brainstorm sessions, rough sketches were
                created that served as a starting point to create low fidelity
                mockups for usability testing.
              </p>
            </div>
          </div>
        </section>

        <div className="container mb-lg">
          <div className="col-12">
            <h2>RETROSPECTIVE</h2>
            <div>
              <p>
                By completing this project, I enjoyed getting to work through
                the entire end-to-end design process. With the magnitude of this
                project was intimidating at first, but during the process I grew
                as a designer by tackling ambiguities head-on and seeking advice
                from peers and mentors. After completing this project, I feel
                more confident in my abilities to advocate for users and develop
                simple and intuitive designs and went on to have the opportunity
                to present this project along with its research and design
                solutions. ​
              </p>
              <p>
                If you want to hear more about this project, feel free to
                <a href="/contact" role="link" className="text-bright-green">
                  {" "}
                  contact me.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
