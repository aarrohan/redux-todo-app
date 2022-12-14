// Action Types
import {
  LOAD,
  ADD,
  REMOVE,
  TOGGLE_STATUS,
  SET_PRIORITY,
  COMPLETE_ALL,
  CLEAR_ALL_COMPLETED,
} from "./actionTypes";

// Actions
const load = (payload) => {
  return {
    type: LOAD,
    payload,
  };
};

const add = (payload) => {
  return {
    type: ADD,
    payload,
  };
};

const remove = (payload) => {
  return {
    type: REMOVE,
    payload,
  };
};

const toggleStatus = (payload) => {
  return {
    type: TOGGLE_STATUS,
    payload,
  };
};

const setPriority = (payload) => {
  return {
    type: SET_PRIORITY,
    payload,
  };
};

const completeAll = (payload) => {
  return {
    type: COMPLETE_ALL,
    payload,
  };
};

const clearAllCompleted = (payload) => {
  return {
    type: CLEAR_ALL_COMPLETED,
    payload,
  };
};

// Export
export {
  load,
  add,
  remove,
  toggleStatus,
  setPriority,
  completeAll,
  clearAllCompleted,
};
