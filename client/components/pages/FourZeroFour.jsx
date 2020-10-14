import React from "react";

export default function FourZeroFour(props) {
  return (
    <div className="container-fluid h-100 my-lg">
      <div className="text-center">
        <h1>UH OH!</h1>
        <h3>The Page Your Are Looking For Might Not Exist</h3>
        <a href="" onClick={() => props.history.push('/')} role="link">Go Back</a>
      </div>
    </div>
  );
}
