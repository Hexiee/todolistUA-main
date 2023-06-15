import React from "react";

export function TodoItem({ todo, cambiarEstado, eliminarTareas }) {
  const { id, task, completed } = todo;

  const handleOnChange = () => {
    cambiarEstado(id);
  };

  const handleEliminarTareas = () => {
    eliminarTareas(id);
  };

  return (
    <li className={list-group-item ${completed ? 'bg-success text-white' : 'bg-danger text-white'}}>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={completed}
          onChange={handleOnChange}
        />
        <label className="form-check-label">{task}</label>
      </div>
      <button
        className="btn btn-danger btn-sm ms-2"
        onClick={handleEliminarTareas}
      >
        <i className="bi bi-trash"></i>
      </button>
    </li>
  );
}