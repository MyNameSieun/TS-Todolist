// src/components/todo/TodoList.tsx

import { Todo } from "../../types/todo.type";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: string) => void;
}

const TodoList = ({ todos, deleteTodo }: TodoListProps) => {
  const handleDelete = (id: string) => {
    deleteTodo(id);
    alert("삭제가 완료되었습니다!");
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <p>제목: {todo.content}</p>
          <p>내용: {todo.title}</p>
          <p>등록일: {todo.deadline}</p>
          <button onClick={() => handleDelete(todo.id)}>삭제</button>
        </li>
      ))}
      <TodoItem />
    </ul>
  );
};

export default TodoList;
