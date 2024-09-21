// src/components/todo/TodoList.tsx

import { Todo } from "../../types/todo.type";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <p>{todo.content}</p>
          <p>{todo.title}</p>
          <p>{todo.deadline}</p>
        </li>
      ))}
      <TodoItem />
    </ul>
  );
};

export default TodoList;
