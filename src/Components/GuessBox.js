import React, { Component } from 'react'

class GuessBox extends Component {

  state = {
      guess: ''
  }

  handleChange = (event) => {
    this.setState({
      guess: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.setInput(this.state.guess)
    if (this.props.picture==this.state.guess) {
      console.log("Hedgehog");

    }
    this.setState({
        guess: ''
    });
  }

  render() {
      return (
      <form onSubmit={this.onSubmit}>
        <label>
        Guess:
          <input type="text" name="guess" onChange={this.handleChange} value={this.state.guess}/>
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

export default GuessBox;
