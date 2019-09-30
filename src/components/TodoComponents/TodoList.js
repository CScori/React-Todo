import React from 'react'
import Todo from './Todo'
// import styled from 'styled-components'

const TodoList = props => {
    return (
        <div>{props.todo.map(action => (
            <Todo key={action.id} item={action} toggleItem={props.toggleItem}
        ))}
            <button onClick={props.deleteTask}>Task Done!</button>
        </div>
    )
}

export default TodoList


