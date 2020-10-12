import React from "react";
import GRO_APP_PNG from "../assets/images/Homepage/GRO-App.png";
import SAYV_APP_GIF from "..//assets/gifs/Sayv-Mockup.gif";

export default function Dash(props) {
  const dashItemConfigs = [
    {
      subtitle: "UX/UI DESIGN",
      title: "GRO Gardening App",
      description:
        "Lead the research and design for a innovative gardening app to reimaginge how technology and gardening can be intertwined to create an enjoyable and intuitive experience.",
      cta: "SEE CASE STUDY",
      ctaLink: "/casestudy",
      style: {
        background: `url("${GRO_APP_PNG}") no-repeat`,
        backgroundSize: "100% auto",
        backgroundPosition: "50% 0%"
      }
    },
    {
      subtitle: "DESIGN STUDIES",
      title: "Mobile Applications",
      description: "",
      cta: "SEE MORE",
      style: {
        background: `url("${SAYV_APP_GIF}") no-repeat`,
        backgroundSize: "100% auto",
        backgroundPosition: "50% 0%"
      }
    },
    {
      subtitle: "",
      title: "",
      description: "",
      cta: "",
      style: {
        background: `url("${GRO_APP_PNG}") no-repeat`,
        backgroundSize: "100% auto",
        backgroundPosition: "50% 0%"
      }
    }
  ];

  const dashItems = dashItemConfigs.map((item, i) => {
    return (
      <div key={`${item.title}-${i}`} className="col-sm-4 dash-item p-4">
        <div className="d-flex h-100" style={item.style}>
          <div className="dash-item__content p-5 d-flex flex-grow-1 flex-column justify-content-end bg-black opaque--65 rounded text-white">
            <h6 className="mb-0">{item.subtitle}</h6>
            <h2 className="">{item.title}</h2>
            <p className="">{item.description}</p>
            <a
              href={item.ctaLink}
              role="link"
              title={item.cta}
              className="text-white underline"
            >
              <span>{item.cta}</span>
            </a>
          </div>
        </div>
      </div>
    );
  });

  return <div className="row w-100 p-4 dash p-dash">{dashItems}</div>;
}
