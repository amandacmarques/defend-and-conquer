import React from 'react';
import Title from './Components/Title'
import './App.css';
import TodoComponent from './Components/TodoComponent';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
        <Title />
        </Row>
        <Row>
          <Col><TodoComponent /></Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
      <div className = "Header">
        <Title />
      </div>
    </div>
  );
}

export default App;
