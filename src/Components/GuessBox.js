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
    if (this.props.picture==this.state.guess) {
      console.log("Hedgehog");

    }
  }

  render() {
      return (
      <form onSubmit={this.onSubmit}>
        <label>
        Guess:
          <input type="text" name="guess" onChange={this.handleChange}/>
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

export default GuessBox;
