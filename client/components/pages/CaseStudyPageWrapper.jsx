import React from "react";
import Banner from "./sub-comps/Banner";

import CSPageJumbo from "./sub-comps/CSPageJumbo";

export default function CaseStudyPageWrapper(props) {
  return (
    <div className={`container-fluid casestudy p-0 ${props.className} `}>
      <CSPageJumbo
        className={props.jumboClassName}
        heroImage={props.jumboHeroImage}
        appImageComp={props.appImageComp}
        imageStyle={props.jumboImageStyle}
        title={props.jumboTitle}
        titleComp={props.jumboTitleComp}
        description={props.jumboDescription}
      />

      {props.children}

      <Banner
        cta={"VIEW CASE STUDY"}
        subtitle={"WANT TO SEE MORE?"}
        message={
          props.bottomBannerMessage || (
            <h2>
              Check out the <br /> GRO App Case Study
            </h2>
          )
        }
        link={props.bottomBannerLink || "/casestudy/gro"}
        target={"_self"}
      />
    </div>
  );
}
