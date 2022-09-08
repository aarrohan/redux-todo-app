// Actions
import { setPriority } from "../actions";

// Fetch
const setTodoPriority = (payload) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${payload.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        priority: payload.priority,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await response.json();

    dispatch(
      setPriority({
        id: todo.id,
        priority: todo.priority,
      })
    );
  };
};

// Export
export default setTodoPriority;
