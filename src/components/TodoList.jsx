import React from 'react'

import TodoCard from './TodoCard'

export default function TodoList(props) {
    const { todos, selectedTab } = props

    const selectedTodos = selectedTab === 'All' ? todos : 
                        selectedTab === 'Active' ? todos.filter(todo => !todo.completed) :
                        todos.filter(todo => todo.completed)

  return (
    <div className='container-fluid d-flex flex-column px-0 gap-2'>
      {selectedTodos.map( (todo, todoIndex) => 
        <TodoCard key={todoIndex} todo={todo} todoIndex={todos.indexOf(todo)} {...props}/>
      )}
    </div>
  )
}
