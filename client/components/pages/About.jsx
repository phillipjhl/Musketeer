import React from "react";
import Banner from "../Banner";
// import JumboTitle from "../blocks/JumboTitle";
import Timeline from "../timeline";

export default function AboutPage(props) {
  return (
    <div>
      <section className="container my-lg">
        {/* <img /> */}
        {/* <JumboTitle /> */}
      </section>
      <section className="container my-lg">
        <Timeline />
      </section>
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
  );
}
