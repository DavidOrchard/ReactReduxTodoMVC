import {ADD_TODO, TOGGLE_TODO} from '../constants/ActionTypes';

// how about using the ADD_TODO action so that the property names aren't duplicated?
const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
];

//IMPORTANT: Note that with Redux, state should NEVER be changed.
//State is considered immutable. 
export default function todos(state = initialState, action) {
	switch (action.type) {
		case ADD_TODO:
      return [...state, 
            {
              id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
              completed: false,
              text: action.text
            }];

    case TOGGLE_TODO: {
      let foundIndex = -1;
      const foundTodo = state.find((todo, index) => {
        if(todo.id === action.id) {
          foundIndex = index;
          return true;
        }
        return false;
      });

      if(!foundTodo) {
        return state;
      }

      return [...state.slice(0, foundIndex), 
            {
              id: foundTodo.id,
              completed: !foundTodo.completed,
              text: foundTodo.text
            },
            ...state.slice(foundIndex + 1)];
      }
      
		default:
			return state;
	}
}
