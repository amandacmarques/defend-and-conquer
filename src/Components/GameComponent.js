import React, { Component } from 'react'
import Cell from "./Cell"
import { Row, Col} from 'react-bootstrap'
import "./CellStyle.css"

class GameComponent extends Component {

  state = {
    gameState: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
    cellColors: [["pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink"],
                 ["pink", "pink", "pink", "brown", "pink", "brown", "pink", "brown", "pink", "pink"],
                 ["brown", "pink", "brown", "red", "brown", "brown", "brown", "brown", "pink", "brown"],
                 ["pink", "brown", "brown", "brown", "brown", "yellow", "brown", "red", "brown", "pink"],
                 ["pink", "peachpuff", "peachpuff", "peachpuff", "brown", "brown", "brown", "brown", "brown", "brown"],
                 ["black", "peachpuff", "black", "peachpuff", "brown", "brown", "green", "brown", "brown", "brown"],
                 ["peachpuff", "peachpuff", "peachpuff", "peachpuff", "brown", "brown", "brown", "brown", "brown", "pink"],
                 ["pink", "peachpuff", "peachpuff", "peachpuff", "peachpuff", "peachpuff", "peachpuff", "peachpuff", "brown", "pink"],
                 ["pink", "pink", "pink", "brown", "pink", "pink", "brown", "pink", "pink", "pink"],
                 ["pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink"]]
  }


  componentDidUpdate(prevProps) {
      if (this.props.currImage !== prevProps.currImage) {
          // bar prop has changed
          alert("image changed");
      }
  }

  displayBoard = () => {
    const board = [];
    let hasNotRun = true;
    if (this.props.picture == this.props.userInput && hasNotRun) {
      this.displayAll();
      hasNotRun = false;
    }
    return (
      <div>
          {this.state.gameState.map((row, i) => (
            <Row key={i}>
              {row.map((col, j) => {
                let color = "#FFF";
                if (this.state.gameState[i][j] == 1) {
                  color = this.state.cellColors[i][j];
                }
                return (<Col className="column" key={j}><Cell color={color} reveal={() => this.reveal(i, j)}/></Col>)
              })}
            </Row>
          ))}
      </div>
    )

  }

  displayAll = () => {
    let newGameState = [...this.state.gameState];
    {this.state.gameState.map((row, i) => (
      <Row key={i}>
        {row.map((col, j) => {
          newGameState[i][j] = 1;
        })}
      </Row>
    ))}
//    this.setState({gameState: newGameState})
  }

  reveal = (i, j) => {
    if (this.state.gameState[i][j]==1) {
      console.log("clicked already");
    } else if (this.props.points > 0) {
      let newGameState = [...this.state.gameState];
      newGameState[i][j] = 1;
      this.setState({gameState: newGameState})
      console.log(this.props.userInput);
      console.log("onClick is working", newGameState);
      this.props.decrementPoints(1);
    } else {
      alert("Stop procrastinating and do your to-dos to get more points!")
    }
  }

  loadNewFile = (arr) => {
    this.state.cellColors = arr;
    let newGameState = [...this.state.gameState];
    {this.state.gameState.map((row, i) => (
      <Row key={i}>
        {row.map((col, j) => {
          newGameState[i][j] = 1;
        })}
      </Row>
    ))}
  }

  render() {
    return (
      <div>
        {this.displayBoard()}
      </div>
    )
  }
}

export default GameComponent;
