import { useState } from "react";
import { useTodoStore } from "../../store/todoStore";
import { Todo } from "../../types/todo.type";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { id, title, content, deadline, isDone } = todo;
  const { deleteTodo, toggleDoneTodo, patchTodo } = useTodoStore();

  const [editTodo, setEditTodo] = useState<Pick<
    Todo,
    "title" | "content"
  > | null>(null);

  // 삭제
  const handleDeleteButton = () => {
    const deleteConfirm = window.confirm("정말 삭제하시겠습니까?");
    if (deleteConfirm) {
      deleteTodo(id);
      alert("삭제가 완료되었습니다.");
    }
  };

  // 수정
  const handleEditButton = () => {
    if (editTodo) {
      patchTodo(id, editTodo);
      alert("수정이 완료되었습니다.");
      setEditTodo(null);
    } else {
      alert("수정할 항목이 없습니다.");
    }
  };

  // 토글
  const handleDoneToggleButton = () => {
    toggleDoneTodo(id, isDone);
  };

  return (
    <li>
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
          <button onClick={handleEditButton}>수정 완료</button>
          <button onClick={() => setEditTodo(null)}>수정취소</button>
        </>
      ) : (
        <>
          <h2>{title}</h2>
          <p>{content}</p>
          <p>{deadline}</p>
          <button onClick={handleDeleteButton}>삭제</button>
          <button onClick={() => setEditTodo({ title, content })}>
            수정하기
          </button>
          <button onClick={handleDoneToggleButton}>
            {isDone ? "할 일 완료" : "할 일 취소"}
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
