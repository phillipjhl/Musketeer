import React, { useEffect } from "react";
import Masonry from "masonry-layout";

export function TimelineBox(props) {
  let position = props.index % 2 !== 0 ? "left" : "right";

  return (
    <div
      id={props.id}
      className={`timeline__box col-md-6 grid-item px-5 py-5 ${
        position === "left" ? "text-right" : "text-left"
      }`}
    >
      <div className={`timeline__box__arrow--${position}`} />
      {props.year && <h1 className="text-hollow-primary">{props.year}</h1>}
      <div className="pl-3">
        {props.yearFull && (
          <p className="mb-0 text-uppercase">{props.yearFull}</p>
        )}
        {props.title && <h4>{props.title}</h4>}
        {props.text && <p>{props.text}</p>}
      </div>
    </div>
  );
}

export default function Timeline(props) {
  const timelineItems = [
    // { title: "A Brief Look at My Experience" },
    {
      year: "2016",
      yearFull: "Summer 2016",
      title: "DISCOVERED MY PASSION",
      text:
        "I found my passion for design as I created materials to promote my photography side-hustle. I knew the importance of having strong brand and web design and soon found myself pouring over typography, color theory, and visual hierarchy."
    },
    {
      year: "2017",
      yearFull: "Summer 2017",
      title: "MOVED TO BIRMINGHAM",
      text:
        "My husband and I relocated from Auburn to Birmingham and began renovating our mid-century home."
    },
    {
      year: "2018",
      yearFull: "Summer 2018",
      title: "DESIGNED MY FIRST WEBSITE",
      text:
        "I used the UX Process to design and launch my first website. I created site maps, wireframes, and conducted user testing before launching the site."
    },
    {
      year: "2019",
      yearFull: "Summer 2019",
      title: "DESIGNING FOR FREELANCE",
      text:
        "While finishing school, I took on freelance design projects. I served small business clients through logo, print, and website design."
    },
    {
      year: "2019",
      yearFull: "Spring 2019",
      title: "RECEIVED MY BACHELORS",
      text:
        "I received my Bachelors of Accountancy in Spring of 2019. Although I knew my passion was for design, I knew I also appreciated the analytical aspect of accounting. "
    },
    {
      year: "2020",
      yearFull: "Summer 2020",
      title: "STARTED UX/UI PROGRAM",
      text:
        "In June of 2020, I committed to developing my User Experience and Interface skills. I joined the Springboard programthat included a 700+ hour curriculum along with expert mentorship. This opportunity has allowed me to successfully solve complex problems through simple, beautiful designs."
    }
  ];

  useEffect(() => {
    let msnry = new Masonry(".grid", {
      // options
      itemSelector: ".grid-item",
      percentPosition: true,
      horizontalOrder: true,
      stagger: 200
    });

    msnry.layout();
  }, []);

  let items = timelineItems.map((item, i) => {
    return (
      <TimelineBox key={`item-${i}`} id={`item-${i}`} index={i} {...item} />
    );
  });

  return (
    <div className="grid timeline">
      <div className="grid-sizer col-md-6"></div>
      <div className="timeline__line" />
      <div>
        <h1 className="grid-item grid-item--title col-md-6 text-bold text-right px-5">
          A Brief Look at <br /> My Experience
        </h1>
      </div>
      {items}
    </div>
  );
}
