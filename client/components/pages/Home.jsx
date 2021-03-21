import React from "react";
import Jumbotron from "../Jumbotron";
// import JumboTitle from "../blocks/JumboTitle";
import JumboTitleNew from "../blocks/JumboTitleNew";
// import Dash from "../Dash";
// import Banner from "../Banner";
// import Section from "../blocks/Section";
import Container from "../blocks/Container";

// Images
import DSM from "../../assets/images/Homepage/Design-System-Mockup.png";
import GROM from "../../assets/images/Homepage/GRO-Mockup.png";
import RUNRM from "../../assets/images/Homepage/RUNR-Mockup.png";
import ShiptM from "../../assets/images/Homepage/Shipt-Mockup.png";

export default function Home(props) {
  const sectionConfigs = [
    {
      subtitle: "UX/UI DESIGN",
      title: "GRO App",
      description:
        "Led the research and design for an innovative gardening app.",
      ctaText: "See solution",
      ctaLink: "/casestudy/gro",
      imageUrl: `${GROM}`,
      className: "bg-dark text-white",
      animate: true,
      disabled: false,
      style: {
        // backgroundImage: `url("${GRO_APP_PNG}") no-repeat`
      }
    },
    {
      subtitle: "UX/UI DESIGN",
      title: "Grocery App",
      description:
        "Researched and designed a shopping list feature to improve user experience for ordering grocery delivery.",
      ctaText: "See Solution",
      ctaLink: "/casestudy/shipt",
      imageUrl: `${ShiptM}`,
      className: "",
      animate: true,
      disabled: false,
      style: {
        // backgroundImage: `url("${GRO_APP_PNG}") no-repeat`
      }
    },
    {
      subtitle: "UX/UI DESIGN",
      title: "RUNR App",
      description:
        "UX Research and Design to increase RUNR fitness app user engagement.",
      ctaText: "See solution",
      ctaLink: "/casestudy/runr",
      imageUrl: `${RUNRM}`,
      className: "bg-dark text-white",
      animate: true,
      disabled: false,
      style: {
        // backgroundImage: `url("${GRO_APP_PNG}") no-repeat`
      }
    },
    {
      subtitle: "CASE STUDY",
      title: "Design System",
      description: "Established a design system for a mobile app.",
      ctaText: "See solution",
      ctaLink: "/casestudy/designstudy",
      imageUrl: `${DSM}`,
      className: "--ds",
      animate: true,
      disabled: false,
      style: {
        // backgroundImage: `url("${SAYV_APP_GIF}") no-repeat`
      }
    }
  ];

  let sections = sectionConfigs.map((config, index) => {
    let textOrder = (index + 1) % 2 === 0 ? 1 : 0;
    return (
      <Container
        key={`${config.title}-${index}`}
        textOrder={textOrder}
        {...config}
      />
    );
  });

  return (
    <main>
      <Jumbotron
        titleComp={JumboTitleNew}
        titleCompProps={{
          subtitleTop: "Hello, I'm Katrina",
          ctaText: "See My Work",
          ctaLink: `#${sectionConfigs[0].title}`
        }}
        class="jumbotron-full"
      />
      <div className="container-fluid p-0">
        <a name={`${sectionConfigs[0].title}`} />
        {sections}
      </div>
    </main>
  );
}
