// Action Types
import { CHANGE_STATUS, CHANGE_PRIORITY } from "./actionTypes";

// Actions
const changeStatus = (payload) => {
  return {
    type: CHANGE_STATUS,
    payload,
  };
};

const changePriority = (payload) => {
  return {
    type: CHANGE_PRIORITY,
    payload,
  };
};

// Export
export { changeStatus, changePriority };
