// Todo list items
import React from 'react'

const ToDo = ({todo, handleToggle}) => {

  const handleClick = (e) => {
    e.preventDefault()
    handleToggle(e.currentTarget.id)
  }
 
  return (
    // className will be "strike" if the todo is complete
    <div 
      id={todo.id} 
      key={todo.id} 
      className={todo.complete ? "strike" : ""} 
      onClick={handleClick}
    >
      {todo.task}
    </div>
  )

}

export default ToDo