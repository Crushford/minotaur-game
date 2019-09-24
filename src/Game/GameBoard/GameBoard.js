import React, { Component } from "react";
import BoardRow from "../GameBoard/BoardRow/BoardRow";
import BoardSquare from "../GameBoard/BoardSquare/BoardSquare";

const GameBoard = () => {
  return (
    <div>
      {this.props.gameBoard.forEach(row => {
        <BoardRow>
          {row.array.forEach(cell => {
            <BoardSquare contents={cell} />;
          })}
        </BoardRow>;
      })}
    </div>
  );
};

export default GameBoard;
