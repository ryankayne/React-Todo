import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Clean Room',
          id: 1528817065345,
          completed: false
        }
      ],
      todo: ''
    };
  }

  addToDo = e => {
    e.preventDefault();
    const newToDo = { task: this.state.todo, completed: false, id: Date.now() };
    this.setState({ todos: [...this.state.todos, newToDo], todo: '' });
  };

  toggleToDoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos })
  };

  changeToDo = e => this.setState({ [e.target.name]: e.target.value });

  clearCompleted = e => {
    e.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <TodoForm
          value={this.state.todo}
          handleToDoChange={this.changeToDo}
          handleAddToDo={this.addToDo}
          handleClearToDos={this.clearCompleted} />
          <br />
        <TodoList
          handleToggleComplete={this.toggleToDoComplete}
          todos={this.state.todos} />
          
      </div>
    );
  }
}

export default App;
