// Actions
import { add } from "../actions";

// Fetch
const addTodo = (payload) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/todos", {
      method: "POST",
      body: JSON.stringify({
        text: payload.text,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await response.json();

    dispatch(
      add({
        text: todo.text,
      })
    );
  };
};

// Export
export default addTodo;
