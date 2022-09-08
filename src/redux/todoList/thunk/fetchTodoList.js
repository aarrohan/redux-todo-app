// Actions
import { load } from "../actions";

// Fetch
const fetchTodoList = async (dispatch) => {
  const response = await fetch("http://localhost:9000/todos");
  const todoList = await response.json();

  dispatch(
    load({
      todoList,
    })
  );
};

// Export
export default fetchTodoList;
