import React from "react";

export default function AnchorLink(props) {
  if (props.ctaText) {
    return (
      <a
        href={props.ctaLink}
        role="link"
        title={props.ctaText}
        className={`link-border border-primary border-bottom ${props.className}`}
        style={{ fontSize: "20px" }}>
        {props.ctaText}
      </a>
    );
  } else {
    return null;
  }
}
