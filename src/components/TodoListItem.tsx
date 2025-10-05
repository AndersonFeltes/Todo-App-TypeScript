import { useContext } from "react";
import Todo from "../models/Todo";
import { TodoContextType } from "../contexts/TodoContextType";
import { TodoContext } from "../contexts/TodoContext";

//interface criada para tipar as propriedades que vão ser passadas na função
interface TodoListItemProps {
  todo: Todo;
}

export const TodoListItem = (props: TodoListItemProps) => {
  const { removeTodo, toggle } = useContext<TodoContextType>(TodoContext);

  const onRemove = (todo: Todo) => {
    removeTodo(todo);
  };

  const handleChange = () => {
    toggle(props.todo);
  };

  return (
    <tr className="uk-animation-slide-bottom-medium">
      <td className="uk-width-auto">
        <label>
          <input
            className="uk-checkbox"
            type="checkbox"
            checked={props.todo.done}
            onChange={handleChange}
          />
        </label>
      </td>
      <td className="uk-width-expand">{props.todo.title}</td>
      <td className="uk-width-auto">
        <button
          onClick={() => onRemove(props.todo)}
          className="uk-icon-button uk-button-danger"
          uk-icon="trash"
        ></button>
      </td>
    </tr>
  );
};
