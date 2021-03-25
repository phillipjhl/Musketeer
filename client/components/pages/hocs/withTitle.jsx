import React, { useEffect } from "react";

export const withTitle = COMP => {
  const wrappedPage = props => {
    useEffect(() => {
      window.scrollTo(0, 0);
      document.title = props.title
        ? `Katrina Langland | ${props.title}`
        : "Katrina Langland | Product Designer";
    }, [props.title]);

    return <COMP {...props} />;
  };

  return wrappedPage;
};

export default withTitle;
