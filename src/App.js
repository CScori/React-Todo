import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

const tasked = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];
class App extends React.Component {
  constructor() {
    console.log('constructor', constructor)
    super();
    this.state = {
      todo: tasked
    };
  }

  toggleItem = id => {
    console.log(id);
    // Update groceries on our state object
    // use this.setState
    // loop through the arr
    // find which element we clicked update the "pruchased" property
    this.setState({
      groceries: this.state.todo.map(action => {
        if (action.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return action;
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
      <>
        <header>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
        addItem={this.addItem}
        />
        </header>
        <body>
        <TodoList 
        todo={this.state.todo}
        toggleItem={this.toggle}
        deleteTask={this.deleteTask}
        />
        </body>
       
      </>
    )
  }
};

export default App;
