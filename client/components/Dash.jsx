import React from "react";
import GRO_APP_PNG from "../assets/images/Gro-Home.png";
// import SAYV_APP_GIF from "../assets/gifs/Sayv-Mockup.gif";

export default function Dash(props) {
  const dashItemConfigs = [
    {
      subtitle: "UX/UI DESIGN",
      title: "GRO Gardening App",
      description:
        "Lead the research and design for a innovative gardening app to reimaginge how technology and gardening can be intertwined to create an enjoyable and intuitive experience.",
      cta: "SEE CASE STUDY",
      ctaLink: "/casestudy",
      imageUrl: `${GRO_APP_PNG}`,
      animate: true,
      disabled: false,
      style: {
        // backgroundImage: `url("${GRO_APP_PNG}") no-repeat`
      }
    },
    {
      subtitle: "DESIGN STUDIES",
      title: "Mobile Applications",
      description: "",
      cta: "COMING SOON",
      imageUrl: `${GRO_APP_PNG}`,
      disabled: true,
      style: {
        // backgroundImage: `url("${SAYV_APP_GIF}") no-repeat`
      }
    },
    {
      subtitle: "UX/UI DESIGN",
      title: "RUNR",
      description: "Social Fitness App",
      cta: "COMING SOON",
      imageUrl: `${GRO_APP_PNG}`,
      disabled: true,
      style: {
        // backgroundImage: `url("${GRO_APP_PNG}") no-repeat`
      }
    }
  ];

  const dashItems = dashItemConfigs.map((item, i) => {
    let disabled = item.disabled ? "disabled" : "";
    return (
      <div key={`${item.title}-${i}`} className="col-md-6 col-xl-4 dash-item p-4">
        <div className="dash-item__bg d-flex h-100">
          <a
            title={item.cta}
            href={item.ctaLink}
            role="link"
            className={`dash-item__content text-dark p-5 d-flex flex-grow-1 flex-column justify-content-end rounded ${
              item.animate ? "animate" : ""
            } ${disabled}`}
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
  });

  return <div className="row w-100 p-4 dash p-dash">{dashItems}</div>;
}
