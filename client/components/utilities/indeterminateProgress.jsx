import React from "react";

function IndeterminateProgress(props) {
  let message = props.message;

  if (!message) {
    message = "Loading";
  }

  return (
    <div className="container-fluid h-100 my-lg d-flex flex-column justify-content-center align-items-center">
      <div className="indeterminate-loading" style={{width: "400px"}}>
        <div className="line" />
        <div className="subline inc" />
        <div className="subline dec" />
      </div>
      <h5 className="mt-5 text-center text-uppercase">{message}</h5>
    </div>
  );
}

export default IndeterminateProgress;
