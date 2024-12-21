import React from "react";

export default function TaskFilter(props) {

    const { filter, handleFilterChange } = props;

  return (
    <div>
      <select className="filterContainer" value={filter} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
}
