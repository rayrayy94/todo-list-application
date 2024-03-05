import React from "react";
import { useState } from "react";
import { useTodos } from "./contexts/TodosProvider";

function AddTodoForm() {
  const { addNewTodo } = useTodos();
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      alert("Enter A Task");
      // return;
    }
    const newTodo = {
      title: title,
      completed: false,
      id: crypto.randomUUID(),
    };
    addNewTodo(newTodo);
    console.log(newTodo);
    setTitle("");
  };

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
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
