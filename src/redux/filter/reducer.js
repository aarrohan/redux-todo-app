// Action Types
import { CHANGE_STATUS, CHANGE_PRIORITY } from "./actionTypes";

// Initial State
const initialState = {
  status: "all",
  priorities: [],
};

// Reducer
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STATUS:
      return {
        ...state,
        status: action.payload.status,
      };

    case CHANGE_PRIORITY:
      switch (action.payload.changeType) {
        case "add":
          return {
            ...state,
            priorities: [...state.priorities, action.payload.priority],
          };

        case "remove":
          return {
            ...state,
            priorities: state.priorities.filter(
              (priority) => priority !== action.payload.priority
            ),
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

// Export
export default filterReducer;
