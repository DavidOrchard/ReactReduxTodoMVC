import {ADD_TODO} from '../constants/ActionTypes';

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
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
			return [...state, 
            {
              id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
              completed: false,
              text: action.text
            }];

		default:
			return state;
	}
}
