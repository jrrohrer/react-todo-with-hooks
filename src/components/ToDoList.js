// container that holds all of our ToDo components
import React from 'react'
import ToDo from './ToDo'

// when we pass the props in this way, they are destructured.  
const ToDoList = ({toDoList}) => {
  return (
    <div>
      {toDoList.map(todo => {
        return (
          <ToDo todo={todo} />
        )
      })}
    </div>
  )
}

export default ToDoList