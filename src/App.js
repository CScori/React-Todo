import React from 'react';
import Todo from './components/TodoComponents/Todo'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  constructor() {
    console.log('constructor', constructor)
    super();
    this.state = {
      todo: Todo
    };
  }

  
  render() {
    return (
      <>
        <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
        addItem={this.addItem}
        deleteTask={this.deleteTask}
        />
        </div>
       
      </>
    )
  }
};

export default App;
