import React from "react";
import "./BoardSquare.css";

export const BoardSquare = ({ contents }) => {
  return <div className="board-square">{contents}</div>;
};
