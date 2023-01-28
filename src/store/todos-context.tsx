import React, { useState } from "react";
import Todo from "../models/todo";
type ToDosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};
export const TodosContext = React.createContext<ToDosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setToDos] = useState<Todo[]>([]);
  const addToDoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setToDos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  const removeTodoHandler = (todoId: string) => {
    setToDos((prevTodos) => {
      return prevTodos.filter((todo) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        return todo.id !== todoId;
      });
    });
  };
  const contextValue: ToDosContextObj = {
    items: todos,
    addTodo: addToDoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
