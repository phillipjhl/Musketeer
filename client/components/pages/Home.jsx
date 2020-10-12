import React, { Component, Fragment } from "react";
import Jumbotron from "../Jumbotron";
import JumboTitle from "../blocks/JumboTitle";
import Dash from "../Dash";
import Banner from "../Banner";

export default function Home(props) {
  return (
    <main>
      <Jumbotron
        titleComp={JumboTitle}
        subtitleTop="Hello"
        ctaText="MORE ABOUT ME"
        class="jumbotron-full"
      />
      <div className="container-fluid p-0">
        <Dash />
        <Banner
          subtitle={"RESUME"}
          message={
            <p>
              Want to learn more about my
              <br />
              experience? Download my resume.
            </p>
          }
          cta={"DOWNLOAD NOW"}
        />
      </div>
    </main>
  );
}
