import React from "react";

// Dependencies
import { useSelector } from "react-redux";

// Components
import Todo from "./Todo";

// TodoList
const TodoList = () => {
  // States
  const filter = useSelector((state) => state.filter);
  const todoList = useSelector((state) => state.todoList);

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
