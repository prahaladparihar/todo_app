import React, { Component } from 'react';
import logo from './logo.png';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      // { id: 1, task: 'Do some ReactJS course.' },
    ]
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }
  render() {
    return (
      <div className="todo-app container">
        <div className='center'>
          <img className='logo ' src={logo} alt='logo'></img>
        </div>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }

}

export default App;
