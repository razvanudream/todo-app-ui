import React, { useState } from "react";
import { useTodoDispatchContext } from "./Context";
import "../styles/header.css";

function FilterItems() {
  const [activeFilter, setActiveFilter] = useState("");
  const todoDispatch = useTodoDispatchContext();

  const filterItems = (filter) => {
    setActiveFilter(filter);
    todoDispatch({
      type: "FILTER_TODO_ITEMS",
      args: { filter },
    });
  };

  return (
    <div className="filterItems">
      <span className="filterName">Show:</span>
      <div
        className={`filterOption${activeFilter === "All" ? " active" : ""}`}
        onClick={() => filterItems("All")}
      >
        All
      </div>
      <div
        className={`filterOption${
          activeFilter === "Completed" ? " active" : ""
        }`}
        onClick={() => filterItems("Completed")}
      >
        Completed
      </div>
      <div
        className={`filterOption${
          activeFilter === "Incompleted" ? " active" : ""
        }`}
        onClick={() => filterItems("Incompleted")}
      >
        Incompleted
      </div>
    </div>
  );
}

export default FilterItems;
