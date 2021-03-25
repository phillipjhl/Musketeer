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
        title={props.jumboTitle}
        description={props.jumboDescription}
      />

      {props.children}

      <Banner
        cta={"VIEW CASE STUDY"}
        subtitle={"WANT TO SEE MORE?"}
        message={props.bottomBannerMessage}
        link={props.bottomBannerLink}
        target={"_self"}
      />
    </div>
  );
}
