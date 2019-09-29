import React from "react";

export const Button = ({ onClick, buttonContents }) => {
  return <button onClick={onClick}>{buttonContents}</button>;
};
