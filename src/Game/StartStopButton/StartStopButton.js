import React from "react";

export const StartStopButton = ({ onClick, buttonContents }) => {
  return <button onClick={onClick}>{buttonContents}</button>;
};
