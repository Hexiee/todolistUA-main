import React from "react";

export function TodoItem({ todo, cambiarEstado }) {
  const { id, task, completed } = todo;

  const handleOnChange = () => {
    cambiarEstado(id);
  };

  const listItemStyle = {
    backgroundColor: completed ? "lightgreen" : "orange",
    color: "#fff",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "5px",
  };

  return (
    <li style={listItemStyle}>
      <input
        className="form-check-input me-2"
        type="checkbox"
        checked={completed}
        onChange={handleOnChange}
      />
      {task}
    </li>
  );
}