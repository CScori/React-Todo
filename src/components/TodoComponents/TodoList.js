import React from 'react'
import Todo from './Todo'
// import styled from 'styled-components'

const TodoList = props => {
    return (
        <div>
            <button onClick={props.deleteTask}>Task Done!</button>
        </div>
    )
}

export default TodoList

        
