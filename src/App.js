import React, { Component } from 'react';
import Title from './Components/Title'
import './App.css';
import TodoComponent from './Components/TodoComponent';
import GameComponent from './Components/GameComponent'
import StatusBar from './Components/StatusBar'
import { Container, Row, Col } from 'react-bootstrap';
import GuessBox from './Components/GuessBox'
import ImportFileFromBodyComponent from './Components/ImportFileFromBodyComponent';

class App extends Component {

  state = {
    points: 0,
    picture: 'hedgehog',
    userInput: '',
    image: [["pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink"],
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

  setInput = (input) => {
    this.setState({
      userInput: input
    })
    console.log(input);
  }

  imageChange = (newImage) => {
    this.setState({
      image: newImage
    })
    console.log(newImage);
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
        <ImportFileFromBodyComponent changeImage={this.imageChange}/>
        <Container>
          <Row>
            <Col>
              <TodoComponent updatePoints={this.updatePoints}/>
            </Col>
            <Col className = "Game">
              <Row><GameComponent currImage={this.state.image} decrementPoints={this.decrementPoints} userInput={this.state.userInput} picture={this.state.picture} points={this.state.points}/></Row>
              <Row><StatusBar points={this.state.points}/></Row>
            </Col>
          </Row>
          <GuessBox setInput={this.setInput}/>
        </Container>
        <div className = "Header">
          <Title />
        </div>
      </div>
    )
  }
}

export default App;
