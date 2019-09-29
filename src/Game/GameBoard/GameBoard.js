import React from "react";
import { BoardRow } from "./BoardRow/BoardRow";
import { BoardSquare } from "./BoardSquare/BoardSquare";
import "./GameBoard.css";

export const GameBoard = ({ gameBoard }) => {
  let boardRows = gameBoard.map((row, index) => {
    var yKey = index;
    let boardSquares = row.map((squareContents, index) => {
      var xKey = index;
      return <BoardSquare key={`${xKey}-${yKey}`} contents={squareContents} />;
    });
    return <BoardRow key={yKey}>{boardSquares}</BoardRow>;
  });
  return <div className="game-board">{boardRows}</div>;
};
