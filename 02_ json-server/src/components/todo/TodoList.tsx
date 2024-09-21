import { Todo } from "../../types/todo.type";

interface TodoListProps {
  todos: Todo[];
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <h2>{todo.title}</h2>
          <p>{todo.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
