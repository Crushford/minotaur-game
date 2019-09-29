import React from "react";

export const Controller = ({ minotaurLocation, gameBoard, onClick }) => {
  const directionValidityChecker = direction => {
    switch (direction) {
      case "left":
        return gameBoard[minotaurLocation[0] - 1][minotaurLocation[1]] ===
          "W" ||
          gameBoard[minotaurLocation[0] - 1][minotaurLocation[1]] === "EP"
          ? false
          : true;
      case "right":
        return gameBoard[minotaurLocation[0] + 1][minotaurLocation[1]] ===
          "W" ||
          gameBoard[minotaurLocation[0] + 1][minotaurLocation[1]] === "EP"
          ? false
          : true;
      case "up":
        return gameBoard[minotaurLocation[0]][minotaurLocation[1] + 1] ===
          "W" ||
          gameBoard[minotaurLocation[0]][minotaurLocation[1] + 1] === "EP"
          ? false
          : true;
      case "down":
        return gameBoard[minotaurLocation[0]][minotaurLocation[1] - 1] ===
          "W" ||
          gameBoard[minotaurLocation[0]][minotaurLocation[1] - 1] === "EP"
          ? false
          : true;
      default:
        return true;
    }
  };

  const buttonConstructer = direction => {
    let validity = directionValidityChecker(direction);
    let className =
      direction + validity ? "valid-direction" : "invalid-direction";
    return (
      <button
        className={className}
        onClick={validity ? e => onClick(e) : () => null}
      >
        {direction}
      </button>
    );
  };

  return (
    <div className="controller">
      {buttonConstructer("left")}
      {buttonConstructer("right")}
      {buttonConstructer("up")}
      {buttonConstructer("down")}
    </div>
  );
};
