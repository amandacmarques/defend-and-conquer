import React, { Component } from 'react';
import Title from './Components/Title'
import './App.css';
import TodoComponent from './Components/TodoComponent';
import GameComponent from './Components/GameComponent'
import StatusBar from './Components/StatusBar'
import { Container, Row, Col } from 'react-bootstrap';
import GuessBox from './Components/GuessBox'

class App extends Component {

  state = {
    points: 0,
    picture: 'hedgehog'
  }

  updatePoints = (todoPoints) => {
    this.setState({points: this.state.points + todoPoints});
    console.log(this.state.points);
  }

  decrementPoints = (deduction) => {
    this.setState({points: this.state.points - deduction});
    console.log(this.state.points);
  }

  render() {
    return (
      <div className = "App">
        <Container>
          <Row>
            <Col>
              <TodoComponent updatePoints={this.updatePoints}/>
            </Col>
            <Col>
              <Row><GameComponent decrementPoints={this.decrementPoints}/></Row>
              <Row><StatusBar points={this.state.points}/></Row>
            </Col>
          </Row>
          <GuessBox picture={this.state.picture}/>
        </Container>
        <div className = "Header">
          <Title />
        </div>
      </div>
    )
  }
}

export default App;
