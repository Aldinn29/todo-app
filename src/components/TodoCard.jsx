import React from 'react'

export default function TodoCard(props) {
    const { todo, todoIndex, handleDelete, handleComplete } = props

  return (
    <div className='container-fluid bg-light align-items-center d-flex justify-content-between py-2 px-5'>
      <div>
        <h2 className=''>{todo.title}</h2>
      </div>
      <div className='d-flex gap-3'>
        <button className='btn btn-primary' disabled={todo.completed} onClick={() => handleComplete(todoIndex)}>Done</button>
        <button className='btn btn-danger' onClick={() => {handleDelete(todoIndex)}}>Delete</button>
      </div>
    </div>
  )
}
