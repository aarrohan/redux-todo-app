import React, { useState } from "react";

// Dependencies
import { useDispatch } from "react-redux";

// Actions
import { completeAll, clearAllCompleted } from "../redux/todoList/actions";

// Thunks
import addTodo from "../redux/todoList/thunk/addTodo";

// Header
const Header = () => {
  // States
  const [todoText, setTodoText] = useState("");

  // Dispatch
  const dispatch = useDispatch();

  // Functions
  const handleForm = (e) => {
    e.preventDefault();

    dispatch(
      addTodo({
        text: todoText,
      })
    );

    setTodoText("");
  };

  return (
    <React.Fragment>
      <div>
        <form
          onSubmit={handleForm}
          className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        >
          <img src="/images/notes.png" className="w-6 h-6" alt="Add todo" />
          <input
            type="text"
            placeholder="Type your todo"
            className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
            value={todoText}
            onChange={(e) => {
              setTodoText(e.target.value);
            }}
            required
          />
          <button
            type="submit"
            className="appearance-none w-8 h-8 bg-[url('/images/plus.png')] bg-no-repeat bg-contain"
          ></button>
        </form>

        <ul className="flex justify-between my-4 text-xs text-gray-500">
          <li
            className="flex space-x-1 cursor-pointer"
            onClick={() => {
              dispatch(completeAll());
            }}
          >
            <img
              className="w-4 h-4"
              src="/images/double-tick.png"
              alt="Complete"
            />
            <span>Complete all tasks</span>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              dispatch(clearAllCompleted());
            }}
          >
            Clear completed
          </li>
        </ul>
      </div>
      <hr className="mt-4" />
    </React.Fragment>
  );
};

// Export
export default Header;
