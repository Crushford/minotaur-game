import React, { Component } from "react";
import { GameBoard } from "./GameBoard/GameBoard";
import { Button } from "./Button/Button";
import { Controller } from "./Controller/Controller";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameActive: false
    };
  }

  initGame() {
    this.setState({
      gameBoard: [
        ["W", "EP", "W", "W", "W", "W", "W"],
        ["W", "E", "E", "E", "E", "E", "W"],
        ["W", "E", "W", "W", "W", "E", "W"],
        ["W", "E", "E", "G", "W", "E", "W"],
        ["W", "E", "W", "W", "W", "E", "W"],
        ["W", "E", "M", "E", "E", "E", "W"],
        ["W", "W", "W", "W", "W", "W", "W"]
      ],
      gameActive: true,
      minotaurLocation: [2, 5]
    });
  }

  findSpirit = (spirit, gameBoard) => {
    let firstArray = (() => gameBoard.map(arr => arr.indexOf(spirit)))();
    let x = firstArray.find(x => x > 0);
    let y = firstArray.indexOf(x);

    return [x, y];
  };

  handleStartStopGameClick = () => {
    this.props.gameBoard
      ? this.setState(prevState => {
          return { gameActive: !prevState.gameActive };
        })
      : this.initGame();
  };

  updateGame = () => {
    let minotaurLocation = this.findSpirit("M", this.state.gameBoard);
    this.setState(prevState => {
      let gameBoard = { ...prevState.gameBoard };
      gameBoard[prevState.minotaurLocation[1]][prevState.minotaurLocation[0]] =
        "E";
      gameBoard[this.state.newMinotaurLocation[1]][
        this.state.newMinotaurLocation[0]
      ] = "M";
      return { gameBoard, minotaurLocation: minotaurLocation };
    });
  };

  handleContollerClick = (e, newPosition) => {
    console.log(e);
    this.setState(() => {
      return {
        newMinotaurLocation: newPosition
        // selectedDirection: e.target.id
      };
    });
  };

  render() {
    return (
      <div className="Game">
        <h1>The Minotaur Game</h1>
        {this.state.gameBoard && <GameBoard gameBoard={this.state.gameBoard} />}
        {this.state.minotaurLocation && (
          <Controller
            gameBoard={this.state.gameBoard}
            minotaurLocation={this.state.minotaurLocation}
            onClick={this.handleContollerClick}
          />
        )}

        <Button
          onClick={this.handleStartStopGameClick}
          buttonContents={this.state.gameActive ? "Pause Game" : "Start Game"}
        />
        {this.state.gameBoard && (
          <Button onClick={this.updateGame} buttonContents={"End Turn"} />
        )}
      </div>
    );
  }
}

export default Game;
