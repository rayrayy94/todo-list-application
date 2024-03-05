import AddTodoForm from "./AddTodoForm";
import Todos from "./Todos";
import TodosProvider from "./contexts/TodosProvider";

function App() {
  return (
    <TodosProvider>
      <AddTodoForm />
      <Todos />
    </TodosProvider>
  );
}

export default App;
