import React from "react";
import "./App.css";
import NewTodo from "./Components/NewTodo";
import Todos from "./Components/Todos";
import TodosContextProvider, { TodosContext } from "./store/todos-context";
function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
