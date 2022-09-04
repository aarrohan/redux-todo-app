// Action Types
import {
  ADD,
  REMOVE,
  TOGGLE_STATUS,
  SET_PRIORITY,
  COMPLETE_ALL,
  CLEAR_ALL_COMPLETED,
} from "./actionTypes";

// Initial State
const initialState = [
  {
    id: 1,
    text: "Hello World",
    priority: "green",
    completed: true,
  },
];

// Functions
const nextTodoID = (todoList) => {
  const maxTodoID = todoList.reduce(
    (maxID, todo) => Math.max(todo.id, maxID),
    -1
  );

  return maxTodoID + 1;
};

// Reducer
const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: nextTodoID(state),
          text: action.payload.text,
          priority: action.payload.priority,
          completed: false,
        },
      ];

    case REMOVE:
      return state.filter((todo) => todo.id !== action.payload.id);

    case TOGGLE_STATUS:
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    case SET_PRIORITY:
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }

        return {
          ...todo,
          priority: action.payload.priority,
        };
      });

    case COMPLETE_ALL:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEAR_ALL_COMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

// Export
export default todoListReducer;
