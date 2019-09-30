import React from 'react'

class TodoForm extends React.Component {
constructor() {
    super()
    this.state = {
        task: ''
    };
}
render () {
    return (
        <form>
            <input 
            type="text"
            value={}
            name="task"
            onChange={}
            />
        </form>
    )
}


}
export default TodoForm