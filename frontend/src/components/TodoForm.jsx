import React, { useState } from 'react'

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    addTodo({ title, completed: false })
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Add a new task..." 
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoForm
