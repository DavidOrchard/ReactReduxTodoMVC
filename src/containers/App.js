import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/todoActions';
import TodoItem from '../components/TodoItem';
import Footer from '../components/Footer';
import * as visibilityFilters from '../constants/constants';
const ENTER_KEY = 13;

class App extends Component {

  handleNewTodoKeyDown (event) {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    event.preventDefault();

    var val = event.target.value.trim();

    if (val) {
      this.props.actions.addTodo(val);
    }
  }

  render() {
  
      var main;
      const { todos, visibilityFilter, actions } = this.props;

      var todoFilteredList = todos.filter((todo) => {
        if(visibilityFilter === visibilityFilters.COMPLETED_TODOS) {
          return todo.completed;
        }
        if(visibilityFilter === visibilityFilters.ACTIVE_TODOS) {
          return !todo.completed;
        }
        // default is ALL
        return true;
      });

      var todoItems = todoFilteredList.map(function (todo) {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onChange={actions.toggleTodo}
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
              onKeyDown={((event) => this.handleNewTodoKeyDown(event))}
              autoFocus={true}
            />
          </header>
          {main}
          <Footer visibilityFilter={visibilityFilter} onShow={actions.setVisibilityFilter}></Footer>
        </div>
      );
    }
  }

App.propTypes = {
  todos: PropTypes.array.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
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
