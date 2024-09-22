import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../../types/todo.type";
import { deleteTodo } from "../../api/todos";
import { QUERY_KEYS } from "../hooks/query/key.constand";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { id, title, content, deadline, isDone } = todo;

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

  const handleDeletebutton = () => {
    const deleteConfrim = window.confirm("정말 삭제하시겠습니까?");
    if (deleteConfrim) {
      deleteMutation.mutate(id);
    }
  };
  return (
    <li>
      <p>{title}</p>
      <p>{content}</p>
      <p>{deadline}</p>
      <button onClick={handleDeletebutton}>삭제</button>
    </li>
  );
};

export default TodoItem;
