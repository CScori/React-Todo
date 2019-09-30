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

    sumbitNew = e => {
        e.prevent.default();
        this.props.addItem(this.state.task)
    };
  
    render() {
        return (
            <form onSubmit={this.sumbitNew}>
                <input
                    type="text"
                    value={this.task}
                    name="task"
                    onChange={this.handleChange}
                />
                <button>Add ToDo</button>
            </form>
        )
    }


}
export default TodoForm