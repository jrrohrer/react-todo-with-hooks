import './App.css';
import React, { useState } from 'react'
import data from './data.json'
// Components
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'

function App() {
  const [toDoList, setToDoList] = useState(data)

  const handleToggle = (id) => {
    // when a user clicks on a task, we want to change the state of complete to true if it's false and vice versa. Using the second variable in our deconstructed useState array to do this.
    let mapped = toDoList.map(task => {
      return task.id == id ? {...task, complete: !task.complete} : {...task} // updates the task, keeping the other attributes the same, only changing the complete variable
    });
    setToDoList(mapped)
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete
    })
    setToDoList(filtered)
  }

  const addTask = (userInput) => {
    let copy = [...toDoList]
    copy = [...copy, {id: toDoList.length + 1, task: userInput, complete: false}]
    setToDoList(copy)
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;
