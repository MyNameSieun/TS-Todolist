// src/components/todo/TodoList.tsx

import { Todo } from "../../types/todo.type";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: string) => void;
  todoTitle: string;
  toggleTodoDone: (id: string) => void;
}

const TodoList = ({
  todoTitle,
  todos,
  deleteTodo,
  toggleTodoDone,
}: TodoListProps) => {
  // 삭제
  const handleDelete = (id: string) => {
    deleteTodo(id);
    alert("삭제가 완료되었습니다!");
  };

  // 토글
  const handleDoneTodo = (id: string) => {
    toggleTodoDone(id);
  };

  return (
    <>
      <h2>{todoTitle}</h2>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>제목: {todo.content}</p>
            <p>내용: {todo.title}</p>
            <p>등록일: {todo.deadline}</p>
            <button onClick={() => handleDelete(todo.id)}>삭제</button>
            <button onClick={() => handleDoneTodo(todo.id)}>
              {todo.isDone ? "할 일 완료" : "할 일 취소"}
            </button>
          </li>
        ))}
        <TodoItem />
      </ul>
    </>
  );
};

export default TodoList;
