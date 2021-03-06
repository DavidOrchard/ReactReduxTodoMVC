import {SET_VISIBILITY_FILTER } from '../constants/ActionTypes';

export default function setVisibilityFilter(state = 'SHOW_ALL', action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.newFilter;

    default:
      return state;
  }
}
