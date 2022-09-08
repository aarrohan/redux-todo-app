import React, { useEffect } from "react";

// Dependencies
import { useDispatch, useSelector } from "react-redux";

// Thunks
import fetchTodoList from "../redux/todoList/thunk/fetchTodoList";

// Components
import Todo from "./Todo";

// TodoList
const TodoList = () => {
  // States
  const filter = useSelector((state) => state.filter);
  const todoList = useSelector((state) => state.todoList);

  // Dispatch
  const dispatch = useDispatch();

  // Dispatch Thunk
  useEffect(() => {
    dispatch(fetchTodoList);
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {todoList
          .filter((todo) => {
            switch (filter.status) {
              case "complete":
                return todo.completed;

              case "incomplete":
                return !todo.completed;

              default:
                return true;
            }
          })
          .filter((todo) => {
            if (filter.priorities.length > 0) {
              return filter.priorities.includes(todo?.priority);
            }

            return true;
          })
          .map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
      </div>

      <hr className="mt-2" />
    </React.Fragment>
  );
};

// Export
export default TodoList;
