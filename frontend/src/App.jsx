import { useState, useEffect } from 'react'
import axios from 'axios'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './index.css'

function App() {
  const [todos, setTodos] = useState([])

  const fetchTodos = async () => {
    try {
      const response = await axios.get('/api/todos')
      setTodos(response.data)
    } catch (error) {
      console.error("Error fetching todos:", error)
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  const addTodo = async (todo) => {
    try {
      const response = await axios.post('/api/todos', todo)
      setTodos([...todos, response.data])
    } catch (error) {
      console.error("Error adding todo:", error)
    }
  }

  const toggleComplete = async (id, currentStatus) => {
    try {
      const todo = todos.find(t => t.id === id)
      const response = await axios.put(`/api/todos/${id}`, { ...todo, completed: !currentStatus })
      setTodos(todos.map(t => t.id === id ? response.data : t))
    } catch (error) {
       console.error("Error updating todo:", error)
    }
  }

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`)
      setTodos(todos.filter(t => t.id !== id))
    } catch (error) {
      console.error("Error deleting todo:", error)
    }
  }

  return (
    <div className="app-container">
      <h1>My ToDo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
