// Actions
import { toggleStatus } from "../actions";

// Fetch
const toggleTodoStatus = (payload) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${payload.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: !payload.currentStatus,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await response.json();

    dispatch(
      toggleStatus({
        id: todo.id,
      })
    );
  };
};

// Export
export default toggleTodoStatus;
