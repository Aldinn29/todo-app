import { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import Header from './components/Header'
import Tabs from './components/Tabs'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([
    { title: 'Learn JavaScript', completed: true},
    { title: 'Learn React', completed: true },
    { title: 'Learn Node.js', completed: false},
  ])

  const [selectedTab, setSelectedTab] = useState('Active')

  function handleAdd(newTodo){
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
    handleSaveData(newTodos)
  }

  function handleComplete(index){
    let newTodos = [...todos]
    let completedTodo = todos[index]
    completedTodo['completed'] = true
    newTodos[index] = completedTodo
    setTodos(newTodos)
    handleSaveData(newTodos)
  }

  function handleDelete(index){
    let newTodos = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodos)
    handleSaveData(newTodos)
  }

  function handleSaveData(currTodos){
    localStorage.setItem('todo-app', JSON.stringify({todos: currTodos}))
  }

  useEffect(() => {
    if(!localStorage || !localStorage.getItem('todo-app')) return
    let data = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(data.todos)
  }, [])

  return (
    <>
      <Header todos={todos}/>
      <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <TodoInput handleAdd={handleAdd}/>
      <TodoList todos={todos} selectedTab={selectedTab} handleDelete={handleDelete} handleComplete={handleComplete}/>
    </>
  )
}

export default App
