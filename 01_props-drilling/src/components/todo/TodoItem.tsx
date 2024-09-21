// src/components/todo/TodoItem.tsx

import { useState } from "react";
import { StTodoCardItem } from "../../style/TodoStyle";
import { Todo } from "../../types/todo.type";

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: string) => void;
  patchTodo: (id: string, updateTodo: Pick<Todo, "title" | "content">) => void;
  toggleTodoDone: (id: string) => void;
}

const TodoItem = ({
  todo,
  deleteTodo,
  patchTodo,
  toggleTodoDone,
}: TodoItemProps) => {
  const { title, content, deadline, isDone, id } = todo;
  const [editTodo, setEditTodo] = useState<Pick<
    Todo,
    "title" | "content"
  > | null>(null);

  // 삭제
  const handleDelete = () => {
    deleteTodo(id);
    alert("삭제가 완료되었습니다!");
  };

  // 수정
  const handleEditTodo = () => {
    if (editTodo) {
      const updateTodo = {
        title: editTodo.title,
        content: editTodo.content,
      };
      patchTodo(id, updateTodo);
      alert("수정이 완료되었습니다.");
      setEditTodo(null);
    }
  };

  // 토글
  const handleDoneTodo = () => {
    toggleTodoDone(id);
  };

  return (
    <StTodoCardItem $isDone={isDone}>
      <article>
        {editTodo ? (
          <>
            <input
              value={editTodo.title}
              onChange={(e) =>
                setEditTodo({ ...editTodo, title: e.target.value })
              }
            />
            <input
              value={editTodo.content}
              onChange={(e) =>
                setEditTodo({ ...editTodo, content: e.target.value })
              }
            />
            <button onClick={handleEditTodo}>수정 완료</button>
            <button onClick={() => setEditTodo(null)}>수정 취소</button>
          </>
        ) : (
          <>
            <p>제목: {title}</p>
            <p>내용: {content}</p>
            <p>등록일: {deadline}</p>
            <button onClick={handleDelete}>삭제</button>
            <button onClick={() => setEditTodo({ title, content })}>
              수정
            </button>

            <button onClick={handleDoneTodo}>
              {isDone ? "할 일 완료" : "할 일 취소"}
            </button>
          </>
        )}
      </article>
    </StTodoCardItem>
  );
};

export default TodoItem;
