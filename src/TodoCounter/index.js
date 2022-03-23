import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const {totalTodos,completedTodos} = React.useContext(TodoContext);
  return (
    <div>
      <h2 className="title">Your tasks</h2>
      <h3 className="subtitle"> Has completado {completedTodos} de {totalTodos} TODO's</h3>
    </div>
  );
}

export { TodoCounter };
