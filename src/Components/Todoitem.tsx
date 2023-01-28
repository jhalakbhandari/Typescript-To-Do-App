import React from "react";
import classes from "./Todoitem.module.css";
const Todoitem: React.FC<{
  text: string;
  onRemoveTodo: (event: React.MouseEvent) => void;
}> = (props) => {
  return (
    <div>
      <li className={classes.item} onClick={props.onRemoveTodo}>
        {props.text}
      </li>
    </div>
  );
};

export default Todoitem;
