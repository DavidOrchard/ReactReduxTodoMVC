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
});