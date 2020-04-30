import React, { Component } from 'react';
import Title from './Components/Title'
import './App.css';
import TodoComponent from './Components/TodoComponent';
import GameComponent from './Components/GameComponent'
import StatusBar from './Components/StatusBar'
import { Container, Row, Col } from 'react-bootstrap';

class App extends Component {

  state = {
    points: 0
  }

  updatePoints = (todoPoints) => {
    this.setState({points: todoPoints});
    console.log(this.state.points);
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <TodoComponent updatePoints={this.updatePoints}/>
            </Col>
            <Col>
              <Row><GameComponent /></Row>
              <Row><StatusBar points={this.state.points}/></Row>
            </Col>
          </Row>
        </Container>
        <div className = "Header">
          <Title />
        </div>
      </div>
    )
  }
}

export default App;
