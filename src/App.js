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



  render() {
    return (
      <div>
        <div>
        
        </div>
      </div>
    );
  }
}

export default App;
