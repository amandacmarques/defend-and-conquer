import React, { Component } from 'react'

const Cell = ({reveal, color}) => {
  console.log("Inside Cell: ", color);
  return (
    <div style={{backgroundColor: `${color}`}} onClick={reveal}>x</div>
  )
}

export default Cell;
