import React, { Component } from 'react'
import config from "./config"
import Cell from "./Cell"
import { Row, Col} from 'react-bootstrap'

class GameComponent extends Component {

  state = {
    gameState: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    cellColors: [["red", "red", "red", "red"], ["red", "red", "red", "red"], ["red", "red", "red", "red"], ["red", "red", "red", "red"]]
  }

  displayBoard = () => {
    const board = [];

    return (
      <div>
          {this.state.gameState.map((row, i) => (
            <Row key={i}>
              {row.map((col, j) => {
                let color = "#FFF";
                if (this.state.gameState[i][j] == 1) {
                  color = this.state.cellColors[i][j];
                }
                return (<Col key={j}><Cell color={color} reveal={() => this.reveal(i, j)}/></Col>)
              })}
            </Row>
          ))}
      </div>
    )

  }

  reveal = (i, j) => {
    let newGameState = [...this.state.gameState];
    newGameState[i][j] = 1;
    console.log("onClick is working", newGameState);
    this.setState({gameState: newGameState})
    this.props.decrementPoints(5);
  }

  //iterate over array
  //map over array to create columns and rows

  // <Row><Col><Cell/></Col><Col><Cell/></Col><Col><Cell/></Col><Col><Cell/></Col><Col><Cell/></Col></Row>
  // <Row><Col><Cell/></Col><Col><Cell/></Col><Col><Cell/></Col><Col><Cell/></Col><Col><Cell/></Col></Row>
  // <Row><Col><Cell/></Col><Col><Cell/></Col><Col><Cell/></Col><Col><Cell/></Col><Col><Cell/></Col></Row>
  // <Row><Col><Cell/></Col><Col><Cell/></Col><Col><Cell/></Col><Col><Cell/></Col><Col><Cell/></Col></Row>
  // <Row><Col><Cell/></Col><Col><Cell/></Col><Col><Cell/></Col><Col><Cell/></Col><Col><Cell/></Col></Row>


  render() {
    return (
      <div>
        {this.displayBoard()}
      </div>
    )
  }
}

export default GameComponent;
