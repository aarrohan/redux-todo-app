// Actions
import { remove } from "../actions";

// Fetch
const deleteTodo = (payload) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/todos/${payload.id}`, {
      method: "DELETE",
    });

    dispatch(
      remove({
        id: payload.id,
      })
    );
  };
};

// Export
export default deleteTodo;
