import React from "react";
import { useTodos } from "./contexts/TodosProvider";

function Todo({ completed, id, title }) {
  const { handleDelete, handleToggle } = useTodos();

  return (
    <div
      style={{
        padding: "1rem",
        background: "#efefef",
        margin: "1rem auto",
        borderRadius: "20px",
        textAlign: "center",
        width: "500px",
      }}
    >
      <h2>{id}</h2>
      <h2
        style={{
          textDecoration: completed ? "line-through" : "solid",
        }}
      >
        {title}
      </h2>
      <h2>completed: {completed ? "true" : "false"}</h2>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <button onClick={() => handleToggle(id)}>Toggle</button>
    </div>
  );
}

export default Todo;
