import './App.css';
import React, { useState } from 'react'
import data from './data.json'
// Components
import Header from './components/Header'

function App() {
  const [toDoList, setToDoList] = useState(data)

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
