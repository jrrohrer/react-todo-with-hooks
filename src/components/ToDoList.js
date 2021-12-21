// container that holds all of our ToDo components
import React from 'react'
import ToDo from './ToDo'

// when we pass the props in this way, they are destructured.  
const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
  return (
    <div>
      {toDoList.map(todo => {
        return (
          <ToDo todo={todo} handleToggle={handleToggle} />
        )
      })}
      <button style={{margin: '25px'}} onClick={handleFilter} >Clear Completed Items</button>
    </div>
  )
}

export default ToDoList