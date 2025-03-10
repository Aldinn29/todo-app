import React, { useState } from 'react'

export default function TodoInput(props) {
    const { handleAdd } = props
    const[value, setValue] = useState('')

  return (
    <div className='container-fluid input-bg text-white d-flex gap-3 p-3' style={{backgroundColor: 'rgb(209, 209, 209)'}}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Enter task here...' className='form-control shadow-none px-4 rounded-5'/>
      <button className='btn btn-primary rounded-5' onClick={() => {
        if (!value) return
        handleAdd({title: value, completed: false})
        setValue('')
      }}
      >Add Task</button>
    </div>
  )
}
3