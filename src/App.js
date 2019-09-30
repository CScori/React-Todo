import React from 'react';
import { Todo } from './components/TodoComponents/Todo'
import TodoList from './components/TodoComponents/TodoList'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: Todo
    };
  }

  toggleItem = id => {
    console.log(id);
    this.setState({
      todo: this.state.todo.map(aciton => {
        if (action.id === id) {
          return {
            ...action,
            completed: !action.completed
          };
        } else {
          return item;
        }
      })
    });
  };
  // Add and Delete for todoForm
  addItem = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTask]
    });
  };
  deleteTask = () => {
    this.setState({
      todo: this.state.todo.filter(done => !done.completed)
    });
  };

  render() {
    return (
      <div>
        <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
        addItem={this.addItem}
        deleteTask={this.deleteTask}
        />
        </div>
        <div>
        <TodoList 
        todo={this.state.todo}
        toggleItem={this.toggle}/>
        </div>
      </div>
    );
  }
}

export default App;
