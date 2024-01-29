import "./TodoItem.css"
import { CompleteIcon } from "../TodoIcon/completeIcon";
import { DeleteIcon } from "../TodoIcon/deleteIcon";

export {TodoItem}

function TodoItem(props){
    return (
      <li className="TodoItem">
        <CompleteIcon
          completed={props.completed}
          onComplete={props.onComplete}
        />
        <p className={`TodoItem-p ${
          props.completed && "TodoItem-p--complete"}`}>
          {props.text}
        </p>
        <DeleteIcon
          onDelete={props.onDelete}
        />
      </li>
    )
  }

