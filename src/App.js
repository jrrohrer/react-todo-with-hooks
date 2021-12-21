import './App.css';
import React, { useState } from 'react'
import data from './data.json'
// Components
import Header from './components/Header'
import ToDoList from './components/ToDoList'

function App() {
  const [toDoList, setToDoList] = useState(data)

  return (
    <div className="App">
      <Header />
      <ToDoList />
    </div>
  );
}

export default App;
