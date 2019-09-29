import React from "react";
import "./Controller.css";

export const Controller = ({ minotaurLocation, gameBoard, onClick }) => {
  const directionValidityChecker = direction => {
    switch (direction) {
      case "left":
        return [
          gameBoard[minotaurLocation[0] - 1][minotaurLocation[1]].match(/W|EP/)
            ? false
            : true,
          [[minotaurLocation[0] - 1], [minotaurLocation[1]]]
        ];
      case "right":
        return [
          gameBoard[minotaurLocation[0] + 1][minotaurLocation[1]].match(/W|EP/)
            ? false
            : true,
          [[minotaurLocation[0] + 1], [minotaurLocation[1]]]
        ];
      case "up":
        return [
          gameBoard[minotaurLocation[0]][minotaurLocation[1] - 1].match(/W|EP/)
            ? false
            : true,
          [[minotaurLocation[0]], [minotaurLocation[1]] - 1]
        ];
      case "down":
        return [
          gameBoard[minotaurLocation[0]][minotaurLocation[1] + 1].match(/W|EP/)
            ? false
            : true,
          [[minotaurLocation[0]], [minotaurLocation[1] + 1]]
        ];
      default:
        return true;
    }
  };

  const buttonConstructer = direction => {
    let [validity, newPosition] = directionValidityChecker(direction);
    let className = `${direction} ${
      validity ? "valid-direction" : "invalid-direction"
    }`;
    return (
      <button
        className={className}
        onClick={
          validity
            ? newPosition => {
                // console.log(e);
                return onClick(newPosition);
              }
            : null
        }
        id={direction}
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
