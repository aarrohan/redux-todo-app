// Dependencies
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

// Root Reducer
import rootReducer from "./rootReducer";

// Store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// Export
export default store;
