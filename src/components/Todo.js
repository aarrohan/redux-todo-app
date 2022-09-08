import React from "react";

// Dependencies
import { useDispatch } from "react-redux";

// Thunks
import toggleTodoStatus from "../redux/todoList/thunk/toggleTodoStatus";
import setTodoPriority from "../redux/todoList/thunk/setTodoPriority";
import deleteTodo from "../redux/todoList/thunk/deleteTodo";

// Todo
const Todo = ({ todo }) => {
  // Dispatch
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
        <div
          className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
            todo.completed && "border-green-500 focus-within:border-green-500"
          }`}
        >
          <input
            type="checkbox"
            className="opacity-0 absolute rounded-full cursor-pointer"
            checked={todo.completed}
            onChange={() => {
              dispatch(
                toggleTodoStatus({
                  id: todo.id,
                  currentStatus: todo.completed,
                })
              );
            }}
          />
          {todo.completed && (
            <svg
              className="fill-current w-3 h-3 text-green-500 pointer-events-none"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          )}
        </div>

        <div
          className={
            todo.completed
              ? "select-none flex-1 line-through"
              : "select-none flex-1"
          }
        >
          {todo.text}
        </div>

        <div
          className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
            todo.priority === "green" && "bg-green-500"
          }`}
          onClick={() => {
            dispatch(
              setTodoPriority({
                id: todo.id,
                priority: "green",
              })
            );
          }}
        ></div>

        <div
          className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
            todo.priority === "yellow" && "bg-yellow-500"
          }`}
          onClick={() => {
            dispatch(
              setTodoPriority({
                id: todo.id,
                priority: "yellow",
              })
            );
          }}
        ></div>

        <div
          className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
            todo.priority === "red" && "bg-red-500"
          }`}
          onClick={() => {
            dispatch(
              setTodoPriority({
                id: todo.id,
                priority: "red",
              })
            );
          }}
        ></div>

        <img
          src="/images/cancel.png"
          className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
          alt="Cancel"
          onClick={() => {
            dispatch(
              deleteTodo({
                id: todo.id,
              })
            );
          }}
        />
      </div>
    </React.Fragment>
  );
};

// Export
export default Todo;
