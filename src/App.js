import React from 'react';
import Title from './Components/Title'
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import TodoComponent from './Components/TodoComponent'

function App() {
  return (
    <div className="App">
      <div className = "Header">
        <Title />
      </div>
      <div className="Todos">
        <TodoComponent />
      </div>
    </div>
  );
}

export default App;
