import React, { Component } from "react";
import GameBoard from "../Game/GameBoard/GameBoard";
import StartStopButton from "../Game/StartStopButton/StartStopButton";

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
        ["", "", "", "", ""],
        ["", "W", "W", "W", ""],
        ["", "M", "G", "W", ""],
        ["", "W", "W", "W", ""],
        ["", "", "", "", ""]
      ],
      minotaur: [2, 1],
      gameActive: true
    });
  }

  handleStartStopGameClick() {
    this.props.gameBoard
      ? this.setState(prevState => {
          return { gameActive: !prevState.gameActive };
        })
      : this.initGame();
  }

  render() {
    return (
      <div className="Game">
        <h1>The Minotaur Game</h1>
        {this.state.gameBoard && <GameBoard gameBoard={this.state.gameBoard} />}
        <StartStopButton
          onClick={this.state.gameActive}
          buttonContents={this.state.gameActive ? "Start Game" : "Pause Game"}
        />
      </div>
    );
  }
}

export default Game;
