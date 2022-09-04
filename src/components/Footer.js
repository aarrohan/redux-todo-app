import React from "react";

// Dependencies
import { useDispatch, useSelector } from "react-redux";

// Actions
import { changeStatus, changePriority } from "../redux/filter/actions";

// Footer
const Footer = () => {
  // States
  const filter = useSelector((state) => state.filter);
  const todoList = useSelector((state) => state.todoList);

  // Dispatch
  const dispatch = useDispatch();

  // Functions
  const handleStatusChange = (status) => {
    dispatch(
      changeStatus({
        status,
      })
    );
  };

  const handlePriorityChange = (priority) => {
    const changeType = filter.priorities.includes(priority);

    dispatch(
      changePriority({
        priority,
        changeType: changeType ? "remove" : "add",
      })
    );
  };

  return (
    <React.Fragment>
      <div className="mt-4 flex justify-between text-xs text-gray-500">
        <p>
          {todoList.filter((todo) => !todo.completed).length > 0
            ? todoList.filter((todo) => !todo.completed).length > 1
              ? `${todoList.filter((todo) => !todo.completed).length} tasks`
              : `${todoList.filter((todo) => !todo.completed).length} task`
            : "No task"}{" "}
          left
        </p>

        <ul className="flex space-x-1 items-center text-xs">
          <li
            className={`cursor-pointer ${
              filter.status === "all" && "font-bold"
            }`}
            onClick={() => {
              handleStatusChange("all");
            }}
          >
            All
          </li>
          <li>|</li>
          <li
            className={`cursor-pointer ${
              filter.status === "incomplete" && "font-bold"
            }`}
            onClick={() => {
              handleStatusChange("incomplete");
            }}
          >
            Incomplete
          </li>
          <li>|</li>
          <li
            className={`cursor-pointer ${
              filter.status === "complete" && "font-bold"
            }`}
            onClick={() => {
              handleStatusChange("complete");
            }}
          >
            Complete
          </li>
          <li></li>
          <li></li>
          <li
            className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
              filter.priorities.includes("green") && "bg-green-500"
            }`}
            onClick={() => {
              handlePriorityChange("green");
            }}
          ></li>
          <li
            className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
              filter.priorities.includes("yellow") && "bg-yellow-500"
            }`}
            onClick={() => {
              handlePriorityChange("yellow");
            }}
          ></li>
          <li
            className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
              filter.priorities.includes("red") && "bg-red-500"
            }`}
            onClick={() => {
              handlePriorityChange("red");
            }}
          ></li>
        </ul>
      </div>
    </React.Fragment>
  );
};

// Export
export default Footer;
