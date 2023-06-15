import React from "react";

export function TodoItem({ todo, cambiarEstado, eliminarTareas }) {
  const { id, task, completed} = todo;
  const fnCambiarEstado = () =>{
    cambiarEstado(id)
  };
  const handleDeleteClick = () => {
    eliminarTareas();
  };


  return (
    <li className="list-group-item">
      <input type="checkbox" className="form-checked-input me-2" onChange={fnCambiarEstado} checked={completed} onClick={handleDeleteClick}/>
      {task}
    </li>
  );
}
