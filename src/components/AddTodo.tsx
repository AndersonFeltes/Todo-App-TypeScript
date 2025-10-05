import { useContext } from "react";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TodoContext } from "../contexts/TodoContext";
import { TodoContextType } from "../contexts/TodoContextType";
import { useNavigate } from "react-router-dom";

interface AddTodoForm {
  title: string;
}

// Schema Yup
const schema = yup
  .object({
    title: yup.string().required("Tarefa inválida!!"),
  })
  .required();

const AddTodo = () => {
  const { addTodo } = useContext<TodoContextType>(TodoContext);

  const navigate = useNavigate();

  // Forçar tipo do resolver para AddTodoForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddTodoForm>({
    resolver: yupResolver(schema) as Resolver<AddTodoForm>,
  });

  const onSubmit: SubmitHandler<AddTodoForm> = (data) => {
    addTodo(data.title);
    reset();
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4>Nova tarefa</h4>
      <div className="uk-margin uk-width-1-1">
        <input
          type="text"
          id="title"
          placeholder="Nova tarefa..."
          className="uk-input"
          {...register("title")}
        />
        {errors.title && (
          <span>
            <small className="uk-text-danger">{errors.title.message}</small>
          </span>
        )}
      </div>
      <div className="uk-width-1-1">
        <button type="submit" className="uk-button uk-button-primary">
          Salvar
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
