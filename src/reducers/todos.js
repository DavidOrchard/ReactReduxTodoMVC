import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER} from '../constants/ActionTypes';

// how about using the ADD_TODO action so that the property names aren't duplicated?
const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
];

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
              id: action.id,
              completed: false,
              text: action.text
            };

    case TOGGLE_TODO: {
        if(state.id !== action.id) {
          return state;
        }
        return {
          ...state,
          completed: !state.completed
        };

      }
    default:
      return state;
    }
  };

const setVisibilityFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
};

//IMPORTANT: Note that with Redux, state should NEVER be changed.
//State is considered immutable. 
export default function todos(state = initialState, action) {
	switch (action.type) {
		case ADD_TODO: {
      const id = state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
      return [...state, todo(state, {...action, id: id})];
    }

    case TOGGLE_TODO: {
      return state.map(item => todo(item, action));
    }

		default:
			return state;
	}
}
