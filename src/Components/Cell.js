import React, { Component } from 'react'
import "./CellStyle.css"

const Cell = ({reveal, color}) => {
  const emptyString = " ";
  console.log("Inside Cell: ", color);
  return (
    <div className="cell" style={{backgroundColor: `${color}`}} onClick={reveal}>{emptyString}</div>
  )
}

export default Cell;
