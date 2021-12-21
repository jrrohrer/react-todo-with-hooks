// Todo list items
import React from 'react'

const ToDo = ({todo}) => {

  return (
    // className will be "strike" if the todo is complete
    <div className={todo.complete ? "strike" : ""}>
      {todo.task}
    </div>
  )

}

export default ToDo