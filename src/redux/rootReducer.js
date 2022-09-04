// Dependencies
import { combineReducers } from "redux";

// Reducers
import filterReducer from "./filter/reducer";
import todoListReducer from "./todoList/reducer";

// Root Reducer
const rootReducer = combineReducers({
  filter: filterReducer,
  todoList: todoListReducer,
});

// Export
export default rootReducer;
