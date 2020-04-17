import React from 'react';
import Title from './Components/Title'
import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import TodoComponent from './Components/TodoComponent'

function App() {
  return (
    <div className="App">
      <Title />
      <TodoComponent />
    </div>
  );
}

export default App;
