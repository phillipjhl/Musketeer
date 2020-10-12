import React, { Component } from "react";

class IndeterminateProgress extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let message = this.props.message;

    if (!message) {
      message = "Loading";
    }

    return (
      <div className="mx-auto" style={{ width: "400px" }}>
        <div className="card-body">
          <p className="card-text text-center">{message}</p>
          <div className="indeterminate-loading">
            <div className="line" />
            <div className="subline inc" />
            <div className="subline dec" />
          </div>
        </div>
      </div>
    );
  }
}

export default IndeterminateProgress;
