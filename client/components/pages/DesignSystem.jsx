import React from "react";
import LazyLoad from "react-lazyload";
import Banner from "./sub-comps/Banner";

import DSHero from "../../assets/images/Design-System/DS-Hero.png";
import DS from "../../assets/images/Design-System/Design-System.png";
import Circle1 from "../../assets/images/Design-System/Apple.png";
import Circle2 from "../../assets/images/Design-System/Google.png";
import Circle3 from "../../assets/images/Design-System/Lyft.png";
import Atomic from "../../assets/images/Design-System/Atomic-Design.png";

import { withTrail } from "../blocks/Trail";
import CaseStudyPageWrapper from "./CaseStudyPageWrapper";

const LazyLoadWithTrail = withTrail(LazyLoad);

export default function DesignSystemPage(props) {
  return (
    <CaseStudyPageWrapper
      className="casestudy--runr"
      jumboProps={{
        className: "bg-light-grey text-dark",
        heroImage: DSHero,
        imageStyle: {},
        titleComp: (
          <h1 className="">
            GRO APP <br />
            DESIGN SYSTEM
          </h1>
        ),
        description:
          "While designing GRO, an innovative gardening app, I was presented with the challenge of creating an entire design system that served the users and aligned with the brand."
      }}>
      <section className="container pt-5">
        <div className="row my-lg">
          <div className="col-md-5 mx-auto">
            <h2>BACKGROUND AND PROBLEM</h2>
            <div>
              <p>
                When faced with the task of designing an entire mobile
                application for a brand new (theoretical) company, the greatest
                challenges were establishing brand recognition and trust.
              </p>
              <p>
                I knew having a consistent User Interface would be essential for
                users to have the best experience and the best way to do this
                was by establishing an entire design system.
              </p>
            </div>
          </div>

          <div className="col-md-5 mx-auto pb-5">
            <div
              className="border-left border-muted pl-5 h-100 d-flex flex-column justify-content-center"
              style={{ borderLeftWidth: "3px" }}>
              <h6 className="mb-0">ROLE</h6>
              <p className="mb-3">Sole Researcher and UX/UI Designer</p>
              <h6 className="mb-0">PURPOSE</h6>
              <p className="mb-3">
                Project designed for Springboard’s 6 Month UX/UI Design Program
              </p>
              <h6 className="mb-0">TOOLS USED</h6>
              <p className="mb-0">Adobe Illustrator</p>
              <p className="mb-0">Color Box</p>
              <p className="mb-0">Figma</p>
            </div>
          </div>
        </div>

        <div className="row my-lg">
          <div className="col-md-5 mx-auto d-flex text-left flex-column justify-content-center align-items-start">
            <h2>DESIGN PROCESS</h2>
            <div>
              <p>
                I started this project by researching medium articles as well as
                studying the guidelines established by Apple, Google, Facebook,
                and Lyft.
              </p>
              <p>
                I enjoyed learning about the positive effects having a design
                system not only has on the design of the product, but how it
                increases efficiency, productivity, and communication
                internally. Examining these systems served as a guide for this
                project.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="cs-img__block">
              <LazyLoadWithTrail once offset={-10}>
                <img src={Circle1} id="circle1" className="circle" alt="" />
                <img src={Circle2} id="circle2" className="circle" alt="" />
                <img src={Circle3} id="circle3" className="circle" alt="" />
              </LazyLoadWithTrail>
            </div>
          </div>
        </div>
      </section>

      <section className="container text-dark mb-lg">
        <div className="row">
          <div className="col-md-8 mx-auto mb-lg">
            <LazyLoadWithTrail offset={-10} once>
              <blockquote className="blockquote text-center text-dark text-size-large">
                <h1 className="mb-3">
                  “Here’s the simple truth: you can’t innovate on products
                  without first innovating the way you build them.”
                </h1>
                <h4>ALEX SCHLEIFER, AIRBNB</h4>
              </blockquote>
            </LazyLoadWithTrail>
          </div>
        </div>
      </section>

      <section className="container text-dark mb-lg">
        <div className="row">
          <div className="col-md-11 mx-auto mb-5">
            <h2>DESIGN PROCESS</h2>
            <div>
              <p>
                I took inspiration from the book Atomic Design by Brad Frost,
                who goes in-depth about the creation of complex design systems.
                Below you can see an illustration of his system for managing
                these designs.
              </p>
            </div>
          </div>

          <div className="col-md-11 mx-auto mb-5">
            <LazyLoadWithTrail once offset={50}>
              <img src={Atomic} alt="" className="w-100" />
            </LazyLoadWithTrail>
          </div>

          <div className="col-md-11 mx-auto text-left">
            <p>I implemented this system by doing the following:</p>
            <ol>
              <li>
                Increased organization by implementing an established naming
                structure.
              </li>
              <li>Reduced ambiguity by capturing states for each element. </li>
              <li>
                Created nested symbols that were consistent in style and
                purpose.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="container text-dark mb-lg">
        <div className="col-md-11 mx-auto mb-lg">
          <h2>RESULTS</h2>
          <div>
            <p>
              The design system proved a success as it streamlined the design
              process, established brand trust, and improved user experience.
              Having consistent elements throughout the product minimized the
              user's memory load as they were able to recognize the elements.
              This system enabled users to ideally only have to learn how to
              interact with the product once, rather than having to relearn due
              to inconsistencies.
            </p>
          </div>
        </div>

        <div className="col-md-11 mx-auto">
          <LazyLoadWithTrail once offset={50}>
            <img src={DS} alt="" className="w-100" />
          </LazyLoadWithTrail>
        </div>
      </section>

      <section className="container my-lg col-12">
        <h2 className="mb-5">SEE THIS PRODUCT IN ACTION</h2>
        <iframe
          style={{
            minHeight: "800px",
            border: "1px solid transparent"
          }}
          width="100%"
          height="auto"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FkFkf8sHCS6RDtiSiyjLOxC%2FKatrina-s-Capstone-Project%3Fnode-id%3D376%253A52%26viewport%3D372%252C246%252C0.08919398486614227%26scaling%3Dscale-down&chrome=DOCUMENTATION"
          allowFullScreen></iframe>
      </section>

      <div className="container mb-lg">
        <div className="col-md-11 mx-auto">
          <h2>RETROSPECTIVE</h2>
          <div>
            <p>
              Through this project, I learned the value of a design system as
              well as how to develop and maintain detailed design documentation
              including specifications and guidelines in order to improve the
              design and development of a product. ​
            </p>
            <p>
              If you want to hear more about this project, feel free to{" "}
              <a href="/contact" role="link" className="text-primary">
                contact me.
              </a>
            </p>
          </div>
        </div>
      </div>
    </CaseStudyPageWrapper>
  );
}
