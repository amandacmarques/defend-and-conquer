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
                return (<Col className="column" key={j}><Cell color={color} reveal={() => this.reveal(i, j)}/></Col>)
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
