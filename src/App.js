import React from 'react';
import Title from './Components/Title'
import './App.css';
import TodoComponent from './Components/TodoComponent';
import GameComponent from './Components/GameComponent'
import StatusBar from './Components/StatusBar'
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col><TodoComponent /></Col>
          <Col>
            <Row></Row>
            <Row><StatusBar /></Row>
          </Col>
        </Row>
      </Container>
      <div className = "Header">
        <Title />
      </div>
    </div>
  );
}

export default App;
