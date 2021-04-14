import React from "react";
import GRO_APP_PNG from "../assets/images/Gro-Home.png";
import DSCard from "../assets/images/Homepage/Design-System-Card.png";
import RUNRCard from "../assets/images/Homepage/RUNR-home-card.png";

export function DashCard(props) {
  const { item, i } = props;

  function toggleHover(e) {
    e.preventDefault();
  }

  return (
    <div className={`col-md-6 col-xl-4 dash-item p-4`}>
      <div className="dash-item__bg d-flex h-100">
        <a
          // onTouchStart={e => toggleHover()}
          title={item.cta}
          href={item.ctaLink}
          role="link"
          className={`dash-item__content ${
            item.className
          } text-dark p-5 d-flex flex-grow-1 flex-column justify-content-end rounded ${
            item.animate ? "animate" : ""
          }`}
        >
          <img
            id={`${item.title}-${i}-img`}
            className="dash-item__content__img"
            src={item.imageUrl}
            alt=""
          />
          <div className="dash-item__content__box">
            <div className="dash-item__content__box__text">
              <div className="dash-item__content__box__text__header">
                <h6 className="mb-0">{item.subtitle}</h6>
                <h2 className="">{item.title}</h2>
              </div>
              <p className="dash-item__content__box__text__paragraph">
                {item.description}
              </p>
            </div>
            <p className="m-0 underline">
              <span>{item.cta}</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default function Dash(props) {
  const dashItemConfigs = [
    {
      subtitle: "UX/UI DESIGN",
      title: "GRO App",
      description:
        "Led the research and design for an innovative gardening app.",
      cta: "SEE CASE STUDY",
      ctaLink: "/gro",
      imageUrl: `${GRO_APP_PNG}`,
      className: "--gro",
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
      cta: "SEE CASE STUDY",
      ctaLink: "/designstudy",
      imageUrl: `${DSCard}`,
      className: "--ds",
      animate: true,
      disabled: false,
      style: {
        // backgroundImage: `url("${SAYV_APP_GIF}") no-repeat`
      }
    },
    {
      subtitle: "UX/UI DESIGN",
      title: "RUNR App",
      description:
        "UX Research and Design to increase RUNR fitness app user engagement.",
      cta: "SEE CASE STUDY",
      ctaLink: "/runr",
      imageUrl: `${RUNRCard}`,
      className: "--runr",
      animate: true,
      disabled: false,
      style: {
        // backgroundImage: `url("${GRO_APP_PNG}") no-repeat`
      }
    }
  ];

  const dashItems = dashItemConfigs.map((item, i) => {
    let disabled = item.disabled ? true : false;
    return (
      <DashCard
        key={`${item.title}-${i}`}
        i={i}
        disabled={disabled}
        item={item}
        className={item.className}
      />
    );
  });

  return <div id="cards" className="row w-100 p-4 dash p-dash">{dashItems}</div>;
}
