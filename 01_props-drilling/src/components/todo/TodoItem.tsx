// src/components/todo/TodoItem.tsx

import { StTodoCardItem } from "../../style/TodoStyle";
import { Todo } from "../../types/todo.type";

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: string) => void;
  toggleTodoDone: (id: string) => void;
}

const TodoItem = ({ todo, deleteTodo, toggleTodoDone }: TodoItemProps) => {
  const { title, content, deadline, isDone, id } = todo;

  // 삭제
  const handleDelete = () => {
    deleteTodo(id);
    alert("삭제가 완료되었습니다!");
  };

  // 토글
  const handleDoneTodo = () => {
    toggleTodoDone(id);
  };

  return (
    <StTodoCardItem $isDone={isDone}>
      <article>
        <p>제목: {content}</p>
        <p>내용: {title}</p>
        <p>등록일: {deadline}</p>
        <button onClick={handleDelete}>삭제</button>
        <button onClick={handleDoneTodo}>
          {isDone ? "할 일 완료" : "할 일 취소"}
        </button>
      </article>
    </StTodoCardItem>
  );
};

export default TodoItem;
