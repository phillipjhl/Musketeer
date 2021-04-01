import React from "react";
import Banner from "./sub-comps/Banner";

import CSPageJumbo, { CSPageJumboV2 } from "./sub-comps/CSPageJumbo";

export default function CaseStudyPageWrapper(props) {
  const { jumboProps, ...restProps } = props;
  return (
    <div className="container-fluid casestudy p-0">
      {jumboProps.version == 2 ? (
        <CSPageJumboV2 {...jumboProps} />
      ) : (
        <CSPageJumbo {...jumboProps} />
      )}

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
