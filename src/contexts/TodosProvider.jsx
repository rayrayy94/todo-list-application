import React, { useContext } from "react";
import { createContext, useReducer } from "react";
const TodosContext = createContext();

function reducer(todos, action) {
  if (action.type === "DELETE__TODO") {
    return todos.filter((todo) => todo.id !== action.payload.id);
  }
  if (action.type === "ADD__TODO") {
    return [...todos, action.payload.newTodo];
  }
  if (action.type === "TOGGLE__TODO") {
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
  }
  return todos;
}

const initialTodos = [
  { id: 1, title: "task 1", completed: false },
  { id: 2, title: "task 2", completed: true },
  { id: 3, title: "task 3", completed: false },
];

function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const handleDelete = (id) => {
    dispatch({
      type: "DELETE__TODO",
      payload: { id: id },
    });
  };

  const handleToggle = (id) => {
    dispatch({
      type: "TOGGLE__TODO",
      payload: { id: id },
    });
  };
  const addNewTodo = (newTodo) => {
    dispatch({
      type: "ADD__TODO",
      payload: { newTodo: newTodo },
    });
  };
  return (
    <TodosContext.Provider
      value={{
        todos,
        handleDelete,
        handleToggle,
        addNewTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodosContext);
}

export default TodoProvider;
