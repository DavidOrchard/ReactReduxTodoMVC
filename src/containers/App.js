import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/todoActions';
import TodoItem from '../components/TodoItem';

class App extends Component {
  render() {
  
      console.log(this);
      var footer;
      var main;
      const { todos, actions } = this.props;

      var todoItems = todos.map(function (todo) {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        );
      }, this);

      var activeTodoCount = todos.reduce(function (accum, todo) {
        return todo.completed ? accum : accum + 1;
      }, 0);

      var completedCount = todos.length - activeTodoCount;

      if (todos.length) {
        main = (
          <section className="main">
            <input
              className="toggle-all"
              type="checkbox"
              onChange={this.toggleAll}
              checked={activeTodoCount === 0}
            />
            <ul className="todo-list">
              {todoItems}
            </ul>
          </section>
        );
      }

      return (
        <div>
          <header className="header">
            <h1>todos</h1>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus={true}
            />
          </header>
          {main}
        </div>
      );
    }
  }

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
