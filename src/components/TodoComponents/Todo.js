import React from 'react'

const task = props => {
  return (
    <div 
    className={`todo${props.todo.completed ? ' completed' : ''}`}
    onClick={() => props.toggle(props.todo.id)}
    >
      <p>{props.todo.name}</p>
    </div>
  )
}

export default Todo
