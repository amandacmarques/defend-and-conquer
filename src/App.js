import React from 'react';
import Title from './Components/Title'
import './App.css';
import TodoComponent from './Components/TodoComponent';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Container>
        <Row className="justify-content-md-center">
        <Title />
        </Row>
        <Row>
          <Col><TodoComponent /></Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
=======
      <div className = "Header">
        <Title />
      </div>
      <div className="Todos">
        <TodoComponent />
      </div>
>>>>>>> 2315da1a03e4cbbaecfdd8dd4956faf7d36681fe
    </div>
  );
}

export default App;
