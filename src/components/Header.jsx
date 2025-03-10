import React from 'react'

export default function Header(props) {

    const { todos } = props
    const activeTasks = todos.filter(todo => !todo.completed).length
    const taskOrTasks = activeTasks === 1? 'task' : 'tasks'

  return (

    <div className='container-fluid bg-dark text-white text-center p-4'>
      <h1>You have <span>{activeTasks}</span> active {taskOrTasks}</h1>
    </div>

  )
}
