toggleItem = id => {
    console.log(id);
    this.setState({
      todo: this.state.todo.map(action => {
        if (action.id === id) {
          return {
            ...action,
            completed: !action.completed
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

 <TodoList 
        todo={this.state.todo}
        toggleItem={this.toggle}/>
        </div>