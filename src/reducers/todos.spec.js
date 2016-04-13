/* eslint-env mocha */

import todos from './todos';
import expect from 'must';

describe('App', () => {

  const NULL_ACTION = {type: '@@NOOP', payload: {}};
  const DEFAULT_STATE = {
    todos: [],
  };

  const getState = (newState) => Object.assign(
    {},
    DEFAULT_STATE,
    newState
  );

   it('should have a default state', function () {
    expect(todos(undefined, NULL_ACTION)).to.not.eql(DEFAULT_STATE);
  });

  describe('add todo', function() {
    const stateBefore = [];
    const action = {type: 'ADD_TODO', id:0, text: 'Learn Redux'};
    const stateAfter = [{id:action.id, text:action.text, completed:false}];
    it('should add todo', function() {
      expect(todos(stateBefore, action)).to.eql(stateAfter);
    });
  });

  describe('toggle todo', function() {
    const todo = {id:0, text:'learn Redux', completed:false};
    const stateBefore = [todo];
    const action = {type: 'TOGGLE_TODO', id:0};
    const stateAfter = [{id:todo.id, text:todo.text, completed:!todo.completed}];
    it('should toggle todo', function() {
      expect(todos(stateBefore, action)).to.eql(stateAfter);
    });
  });

});