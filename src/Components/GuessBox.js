import React from 'react'

const GuessBox = () => {

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("HI");
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
      Guess:
        <input type="text" name="guess" />
      </label>
      <button>Submit</button>
    </form>
  )
}

export default GuessBox;
