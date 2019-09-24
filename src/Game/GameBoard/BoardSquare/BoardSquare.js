import React, { Component } from "react";
import 'BoardRow.css'  

const BoardRow = () => {
  return <div className="board-square">{...this.props}</div>;
};

export default BoardRow;
