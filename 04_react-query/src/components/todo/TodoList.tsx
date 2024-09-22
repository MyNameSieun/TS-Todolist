import { Todo } from "../../types/todo.type";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todoTitle: string;
  todos: Todo[];
}

const TodoList = ({ todoTitle, todos }: TodoListProps) => {
  return (
    <>
      <h2>{todoTitle}</h2>

      <ul>
        {todos.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
