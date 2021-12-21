import React, {useState} from 'react'

const ToDoForm = ( {addTask} ) => {
  const [userInput, setUserInput] = useState('')

  const handleOnChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    addTask(userInput)
    setUserInput('')
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label>Task: </label>
      <input type='text' name='task' value={userInput} onChange={handleOnChange} /> <br />

      <button style={{margin: '25px'}}>Add Task</button>

    </form>
  )
}

export default ToDoForm