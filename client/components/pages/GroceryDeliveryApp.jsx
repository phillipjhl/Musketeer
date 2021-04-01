import React from "react";
import LazyLoad from "react-lazyload";
// import Banner from "./sub-comps/Banner";

import HeroImg from "../../assets/images/CS-GroceryApp/Shipt-Hero-Mockup.png";

import Circle1 from "../../assets/images/CS-GroceryApp/Family-Circle-Image.png";
import Circle2 from "../../assets/images/CS-GroceryApp/List-Circle-Image.png";
import Circle3 from "../../assets/images/CS-GroceryApp/Person-Circle-Image.png";
import SurveyStatsImg from "../../assets/images/CS-GroceryApp/Research-Stats.png";
import EmpathyMap from "../../assets/images/CS-GroceryApp/Empathy-Map.png";
import Persona1 from "../../assets/images/CS-GroceryApp/Michelle-Persona.png";
import UserJourney from "../../assets/images/CS-GroceryApp/Customer-Journey.png";
import Ideation from "../../assets/images/CS-GroceryApp/IMG_9545.jpg";

import AddingItems from "../../assets/images/CS-GroceryApp/Adding-Items.png";
import SelectItems from "../../assets/images/CS-GroceryApp/Select-Items.png";
import SelectStore from "../../assets/images/CS-GroceryApp/Select-Store.png";

import AddingItemsFinal from "../../assets/images/CS-GroceryApp/Final-Solution-Adding-Items.png";
import SelectItemsFinal from "../../assets/images/CS-GroceryApp/Final-Solution-Selecting-Items.png";
import SelectStoreFinal from "../../assets/images/CS-GroceryApp/Final-Solution-Selecting-Store.png";

import GROM from "../../assets/images/Homepage/GRO-Mockup-2.png";

import { withTrail } from "../blocks/Trail";

import CaseStudyPageWrapper from "./CaseStudyPageWrapper";
import Container from "./sub-comps/Container";

const LoadWithTrail = withTrail(LazyLoad);

const BannerV2 = props => {
  return (
    <div>
      <p>
        Grocery delivery apps have truly changed the way many people shop for
        groceries, however they have neglected to take into consideration the
        large majority of users who rely on shopping lists before to place there
        orders.
      </p>
      <p>
        The goal of this project was to take the opportunity to improve user
        experience by creating a shopping list feature.{" "}
      </p>
      <span>ROLE</span>
      <p>Sole UX Researcher and Designer</p>
      <span>PROJECT</span>
      <p>8 Week Project</p>
      <span>TOOLS USED</span>
      <p>Figma</p>
    </div>
  );
};

export default function GroceryDeliveryApp(props) {
  const BottomBannerProps = {
    subtitle: "UX/UI DESIGN",
    title: "GRO App",
    description: "Led the research and design for an innovative gardening app.",
    ctaText: "See solution",
    ctaLink: "/casestudy/gro",
    imageUrl: `${GROM}`,
    className: "",
    animate: true,
    disabled: false,
    style: {
      // backgroundImage: `url("${GRO_APP_PNG}") no-repeat`
    }
  };

  return (
    <CaseStudyPageWrapper
      jumboProps={{
        version: 2,
        subtitle: "Grocery Delivery App",
        title: "Shopping List Concept",
        className: "bg-gda-green",
        heroImage: HeroImg,
        children: <BannerV2 />
      }}
      bottomBannerMessage={
        <h2>
          Check out the <br /> GRO App Case Study
        </h2>
      }
      bottomBannerLink={"/casestudy/gro"}>
      <section className="container pt-5">
        <div className="row my-3 my-md-lg">
          <div className="row col-md-6 mb-5 mb-md-0 p-0">
            <div className="col-md-11 mx-auto mb-5 mb-md-0 d-flex text-left flex-column justify-content-center align-items-start">
              <h2 className="">PROBLEM</h2>
              <div>
                Currently, users create their shopping lists using separate apps
                or pen and paper. When they are ready to place their order, the
                user constantly has to refer back to the items on their list.
                This process has created a <b>cumbersome experience</b> for
                users resulting in a{" "}
                <b>
                  loss of time, increase in missed items, and potential decrease
                  in user satisfaction.
                </b>
              </div>
            </div>

            <div className="col-md-11 mx-auto mb-5 mb-md-0 d-flex text-left flex-column justify-content-center align-items-start">
              <h2 className="">SOLUTION</h2>
              <div>
                <p>
                  Develop a shopping list feature to suit the needs of users of
                  grocery delivery applications within the constraints of the
                  existing product.
                </p>
              </div>
              <a
                href="#final-prototype"
                role="link"
                className="link-border border-primary border-bottom font-size-lg">
                See final solution
              </a>
            </div>
          </div>

          <div className="col-md-6 mb-5 mb-md-0 d-none d-md-block">
            <div className="cs-img__block">
              <LoadWithTrail offset={-40} once>
                <img src={Circle1} id="circle1" className="circle" alt="" />
                <img src={Circle2} id="circle2" className="circle" alt="" />
                <img src={Circle3} id="circle3" className="circle" alt="" />
              </LoadWithTrail>
            </div>
          </div>
        </div>
      </section>

      <section className="container text-dark my-3 my-md-lg">
        <div className="row">
          <div className="col-sm-5 mx-auto">
            <LoadWithTrail once offset={100} height={272}>
              <img src={SurveyStatsImg} className="w-100" alt="" />
            </LoadWithTrail>
          </div>
          <div className="col-sm-5 mx-auto">
            <h2>RESEARCH</h2>
            <h3>Secondary Research</h3>
            <p>
              Research began with finding studies and journals published to see
              how people grocery shop. It was essential to understand user’s
              current process in order to develop a feature that is intuitive.
            </p>
          </div>
        </div>
      </section>

      <section className="container mb-lg">
        <div className="row">
          <div className="col-sm-5 mx-auto d-flex flex-column justify-content-center">
            <h2>Interviews</h2>
            <p>
              I interviewed 7 individuals to understand how they went about
              grocery shopping, specifically how they create and refer to their
              shopping lists. I was suprised to find that nearly all
              participants create a list, majority of which using an app on
              their phone.
            </p>
            <p className="text-bold">
              Participants who use a grocery delivery app expressed frustration
              of having to create a shopping list within a separate app.
            </p>
          </div>
          <div className="col-sm-5 mx-auto text-center">
            <blockquote className="blockquote text-right text-gda-green text-size-large">
              <h2 className="mb-0">
                “I use Shipt, but have to use a different app to create a
                shopping list... [adding the items to my order] is tedious.”
              </h2>
              <h4>W., SHIPT USER</h4>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="container mb-lg">
        <div className="col-md-11 mx-auto">
          <LoadWithTrail once offset={100} height={1066}>
            <img src={EmpathyMap} alt="" className="w-100" />
          </LoadWithTrail>
        </div>
      </section>

      <section className="container mb-lg">
        <div className="col-md-11 mx-auto row">
          <div className="col-md-4 mb-3">
            <p>INTERVIEWS + EMPATHY MAP</p>
            <h3>Primary Insights</h3>
          </div>

          <div className="col-md-8">
            <div className="d-flex">
              <div className="circle bg-gda-green mr-4">1</div>
              <p>
                Majority of participants who use a grocery delivery service{" "}
                <b>
                  felt some level of frustration while adding items from their
                  shopping list
                </b>{" "}
                to their grocery delivery order.
              </p>
            </div>

            <div className="d-flex">
              <div className="circle bg-gda-green mr-4">2</div>
              <p>
                All participants who created and used shopping lists{" "}
                <b>
                  value efficiency and ease while adding to their shopping list.
                </b>
              </p>
            </div>

            <div className="d-flex">
              <div className="circle bg-gda-green mr-4">3</div>
              <p className="d-inline-block">
                Some users would try to recall their list from memory, which{" "}
                <b>led to them forgetting important items.</b>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONAS */}

      <section className="container mb-lg">
        <div className="col-md-11 mx-auto">
          <h2>PERSONAS</h2>
          <div>
            <p>
              After creating empathy maps, three personas began to emerge. The
              main difference between the seven users was not whether or not
              they used a shopping list, but rather how they went about creating
              their list. My focus for this study is on “Michelle, the Busy Mom”
              persona.
            </p>
          </div>
        </div>
      </section>

      {/* Persona 1 */}

      <section className="container mb-lg">
        <div className="col-md-11 mx-auto mb-4">
          <LoadWithTrail once offset={100} height={1066}>
            <img src={Persona1} alt="" className="w-100" />
          </LoadWithTrail>
        </div>
      </section>

      {/* User Journey */}

      <section className="container mb-lg">
        <div className="col-md-11 mx-auto mb-4">
          <h2>USER JOURNEY</h2>
          <div>
            <p>
              A user journey map was created to visually depict the current user
              experience. We paid close attention to where the satisfaction
              levels dropped. In this journey, satisfaction was the lowest when
              users were adding items to their grocery delivery order. We asked
              users questions to better understand why users felt this way and
              found that having to refer to a separate shopping list was the
              greatest, with some users expressing a desire for item reviews and
              ratings while browsing products.
            </p>
          </div>
        </div>

        <div className="col-md-11 mx-auto">
          <LoadWithTrail once offset={100} height={1066}>
            <img src={UserJourney} alt="" className="w-100" />
          </LoadWithTrail>
        </div>
      </section>

      {/* Design Process Section */}

      <section className="container mb-lg">
        <div className="col-md-11 mx-auto mb-lg">
          <h2>DESIGN PROCESS</h2>

          <p>
            Throughout the entire design process, I was aware of the importance
            of following an existing product’s design system. I referred to{" "}
            <a
              href="https://shipt.tech/the-genesis-e2e2ce4d05a"
              target="_blank">
              this medium article
            </a>{" "}
            written by Sangwoo Kim, a product designer at Shipt, along with
            screenshots of the app to create a feature that was consistent with
            the existing product.
          </p>
        </div>

        <div className="col-md-11 mx-auto row">
          <div className="col-md-6 p-0">
            <LoadWithTrail once offset={100} height={520}>
              <img src={Ideation} alt="" className="w-100" />
            </LoadWithTrail>
          </div>

          <div className="col-md-5 ml-auto">
            <h3>Ideation</h3>
            <p>
              On account of the research helping to understand the problem it
              was time to begin brainstorming solutions.{" "}
            </p>
            <p>
              Following the Lean UX process, ideas were quickly sketched in
              order to generate as many solutions as possible. By the end, three
              were selected as being the strongest.{" "}
            </p>
          </div>
        </div>
      </section>

      <section className="container mb-lg">
        <div className="col-md-11 mx-auto mb-5 mb-md-lg">
          <h2>USER TESTING AND REVISIONS</h2>

          <h3>Easily Items Add to List</h3>

          <p>
            Since users shared that they care about ease and efficiency when
            adding items to their shopping list, this was the priority when
            designing.
          </p>

          <ol className="pl-3 py-0">
            <li>
              In the first round, items’ categories were listed to make it
              easier for users to scan and sort their list. We quickly found
              that this was not a feature users were interested in having.
            </li>

            <li>
              During usability testing, we found that the radio buttons caused
              confusion for users.
            </li>

            <li>
              In addition to removing the radio buttons, suggested keywords were
              added to show recommendation when the user is typing. This
              addition makes it even easier for users to add an item.
            </li>
          </ol>

          <LoadWithTrail once offset={100} height={813}>
            <img src={AddingItems} alt="" className="w-100" />
          </LoadWithTrail>
        </div>

        <div className="col-md-11 mx-auto mb-5 mb-md-lg">
          <h3>Select Store Based on Matches and Deals</h3>

          <p>
            At first, the store selection screen was not given much priority for
            this project because users did not talk about this being a pain
            point during the interview stage. However, during user testing, many
            users were confused by how the stores were ordered on the selection
            page. This led to brainstorming how this stage of the flow could
            better serve users.
          </p>

          <ol className="pl-3 py-0">
            <li>
              The <b>stores are not listed in a particular order</b> and offer
              little information regarding the user’s list.
            </li>

            <li>
              <b>
                Each store’s match and deals were added to help guide the users
                decision.
              </b>{" "}
              The design of this information was revised in the final designs
              after the chip style proved to cause some confusion for users
              during testing.
            </li>

            <li>
              <b>The users address was added</b> to the top of the page to show
              users the location the app is using to generate stores.
            </li>
          </ol>

          <LoadWithTrail once offset={100} height={813}>
            <img src={SelectStore} alt="" className="w-100" />
          </LoadWithTrail>
        </div>

        <div className="col-md-11 mx-auto mb-5 mb-md-lg">
          <h3>Quickly Select Specific Items</h3>

          <p>
            This particular stage proved to be the most challenging. It was
            important to make the process of browsing, selecting, and adding
            products to the user’s order as effortless as possible.
          </p>

          <ol className="pl-3 py-0">
            <li>
              In the first draft, the flow was significantly different. Users
              had to select each item on the list to view results, the flaw in
              this flow was quickly realized and a new solution was designed.
            </li>

            <li>
              In the redesigned solution,{" "}
              <b>
                each item from the shopping list and their results are on one
                page
              </b>{" "}
              to make it simple for users to browse and add items to their
              order.
            </li>
          </ol>

          <LoadWithTrail once offset={100} height={813}>
            <img src={SelectItems} alt="" className="w-100" />
          </LoadWithTrail>
        </div>
      </section>

      <section className="container mb-5 mb-md-lg">
        <div className="col-md-11 mx-auto">
          <h2>FINAL SOLUTION</h2>

          <p>
            As part of my process, I detailed several flows and weighed the pros
            and cons of each. The biggest takeaway from designing for this
            challenge was that{" "}
            <b>
              the simplest solutions often provides the most intuitive user
              experience.
            </b>
          </p>
        </div>

        <div className="col-md-11 mx-auto mb-5">
          <h3>Creating List</h3>
          <LoadWithTrail once offset={100} height={518}>
            <img src={AddingItemsFinal} alt="" className="w-100" />
          </LoadWithTrail>
        </div>

        <div className="col-md-11 mx-auto mb-5">
          <h3>Selecting Store</h3>
          <LoadWithTrail once offset={100} height={518}>
            <img
              src={SelectStoreFinal}
              alt=""
              className=""
              style={{ maxHeight: "518px" }}
            />
          </LoadWithTrail>
        </div>

        <div className="col-md-11 mx-auto mb-5">
          <h3>Specifing Items</h3>
          <LoadWithTrail once offset={100} height={518}>
            <img src={SelectItemsFinal} alt="" className="w-100" />
          </LoadWithTrail>
        </div>
      </section>

      <section className="container mb-lg">
        <div className="col-md-11 mx-auto">
          <h2>RETROSPECTIVE</h2>
          <div>
            <p>
              All users who participated in the final round of user testing said
              that they would use and enjoy this shopping list feature. Users
              reported the feature to reduce time spent placing a grocery
              delivery and 40% of users said they appreciated being able to
              compare the number of deals they would receive at each store.
            </p>
            <p>
              Throughout the span of this project, I was tasked with presenting
              my work each week. During this time, I received constructive
              feedback as my design decisions were challenged. Not only did this
              project grow my design thinking skills, but allowed me to practice
              articulating and defending my design decisions. ​
            </p>
            <p>
              If you want to hear more about this project, feel free to{" "}
              <a href="/contact" role="link" className="">
                contact me.
              </a>
            </p>
          </div>
        </div>
      </section>
    </CaseStudyPageWrapper>
  );
}
