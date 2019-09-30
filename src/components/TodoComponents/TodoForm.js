import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            task: ''
        };
    }
    handleChange = e => {
        this.setState({
            [this.target.name]: e.target.value
        });
    };

  
    render() {
        return (
            <form onSubmit={}>
                <input
                    type="text"
                    value={}
                    name="task"
                    onChange={}
                />
                <button>Add ToDo</button>
            </form>
        )
    }


}
export default TodoForm