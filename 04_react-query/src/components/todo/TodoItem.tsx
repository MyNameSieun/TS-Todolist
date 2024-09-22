import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../../types/todo.type";
import { deleteTodo, toggleDoneTodo, updateTodo } from "../../api/todos";
import { QUERY_KEYS } from "../hooks/query/key.constand";
import { useState } from "react";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { id, title, content, deadline, isDone } = todo;
  const [editTodo, setEditTodo] = useState<Todo | null>(null);

  const queryClient = useQueryClient();

  // 삭제
  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS] });
      alert("삭제 완료!");
    },
    onError: (error) => {
      console.error("삭제 실패:", error);
      alert("삭제 실패. 다시 시도해 주세요.");
    },
  });

  const handleDeleteButton = () => {
    const deleteConfirm = window.confirm("정말 삭제하시겠습니까?");
    if (deleteConfirm) {
      deleteMutation.mutate(id);
    }
  };

  // 수정
  const editTodoMutation = useMutation({
    mutationFn: () => updateTodo(id, editTodo as Todo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS] });
      setEditTodo(null);
      alert("수정 완료!");
    },
    onError: (error) => {
      console.error("수정 실패:", error);
      alert("수정 실패. 다시 시도해 주세요.");
    },
  });

  const handleEditButton = () => {
    if (editTodo) {
      editTodoMutation.mutate();
    }
  };

  // 토글
  const doneTodoToggleMutation = useMutation({
    mutationFn: () => toggleDoneTodo(id, isDone),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS] });
    },
    onError: (error) => {
      console.error("변경 실패:", error);
      alert("변경 실패. 다시 시도해 주세요.");
    },
  });

  const handleDoneToggleButton = () => {
    doneTodoToggleMutation.mutate();
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
          <button onClick={() => setEditTodo(null)}>수정 취소</button>
        </>
      ) : (
        <>
          <p>{title}</p>
          <p>{content}</p>
          <p>{deadline}</p>
          <button onClick={handleDeleteButton}>삭제</button>
          <button onClick={() => setEditTodo(todo)}>수정</button>
          <button onClick={handleDoneToggleButton}>
            {isDone ? "할 일 완료" : "할 일 취소"}
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
