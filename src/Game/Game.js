import React, { Component } from "react";
import { GameBoard } from "./GameBoard/GameBoard";
import { StartStopButton } from "./StartStopButton/StartStopButton";
import { Controller } from "./Controller/Controller";

const findSpirit = (spirit, gameBoard) => {
  let firstArray = (() => gameBoard.map(arr => arr.indexOf(spirit)))();
  let x = firstArray.find(x => x > 0);
  let y = firstArray.indexOf(x);

  return [x, y];
};

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
      minotaurLocation: [2, 1]
    });
  }

  handleStartStopGameClick = () => {
    this.props.gameBoard
      ? this.setState(prevState => {
          return { gameActive: !prevState.gameActive };
        })
      : this.initGame();
  };

  updateGame = () => {
    let minotaurLocation = findSpirit("M", this.state.gameBoard);
    this.setState(prevState => {
      return { minotaurLocation: minotaurLocation };
    });
  };
  handleContollerClick = e => console.log(e);

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

        <StartStopButton
          onClick={this.handleStartStopGameClick}
          buttonContents={this.state.gameActive ? "Pause Game" : "Start Game"}
        />
        <StartStopButton
          onClick={this.updateGame}
          buttonContents={"End Turn"}
        />
      </div>
    );
  }
}

export default Game;
