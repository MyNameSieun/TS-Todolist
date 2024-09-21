import { Todo } from "../../types/todo.type";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todoTitle: string;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todoTitle, todos, setTodos }: TodoListProps) => {
  return (
    <>
      <h1>{todoTitle}</h1>

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
