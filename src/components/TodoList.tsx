import { useContext } from "react";
import { TodoListItem } from "./TodoListItem";
import { TodoContextType } from "../contexts/TodoContextType";
import { TodoContext } from "../contexts/TodoContext";

export const TodoList = () => {
  //usando o contexto criado para a lista de tarefas
  const { todos } = useContext<TodoContextType>(TodoContext);

  //   return <div>{todos.map(body => <div>{body.title}</div>)}</div>;
  return (
    <table className="uk-table">
      <caption>Lista de tarefas</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Tarefa</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          //o interrogação esta testando se o valor não é nulo
          //sempre que percorrer um objeto precisa utilizar o key, identificando o valor único do objeto
          todos?.map((item) => (
            <TodoListItem key={item.id} todo={item}></TodoListItem>
          ))
        }
      </tbody>
    </table>
  );
};
