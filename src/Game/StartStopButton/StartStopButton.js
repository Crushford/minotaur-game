import React, { Component } from "react";

const StartStopButton = () => {
  return (
    <button onClick={this.props.onClick}>{this.props.buttonContents}</button>
  );
};

export default StartStopButton;
