import React from 'react'

export default function Tabs(props) {
    const { todos, selectedTab, setSelectedTab } = props
    const tabs = ['All', 'Active', "Completed"]

  return (
    <nav className='container-fluid bg-secondary text-white text-center p-0 d-flex'>
      {tabs.map((tab, tabIndex) => {

        const tabCount = tab === 'All' ? todos.length :
                         tab === 'Active' ? todos.filter(todo => !todo.completed).length :
                         todos.filter(todo => todo.completed).length

        return (
            <button key={tabIndex} onClick={() => setSelectedTab(tab)} className='btn btn-secondary flex-grow-1' 
            style={{backgroundColor: tab === selectedTab? '#495057' : ''}} >
                <h3>{tab} <span>({tabCount})</span></h3>
            </button>
        )   
        })}
    </nav>
  )
}
