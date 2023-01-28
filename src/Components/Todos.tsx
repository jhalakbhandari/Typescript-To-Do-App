import React, { useContext } from "react";
import Todoitem from "./Todoitem";
import classes from "./Todo.module.css";
import { TodosContext } from "../store/todos-context";
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <div>
      <ul className={classes.todos}>
        {todosCtx.items.map((item) => (
          <Todoitem
            key={item.id}
            text={item.text}
            onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
