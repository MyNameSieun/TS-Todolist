import { useTodoStore } from "../../store/todoStore";
import { Todo } from "../../types/todo.type";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { id, title, content, deadline, isDone } = todo;
  const { deleteTodo, toggleDoneTodo } = useTodoStore();

  // 삭제
  const handleDeleteButton = () => {
    const deleteConfirm = window.confirm("정말 삭제하시겠습니까?");
    if (deleteConfirm) {
      deleteTodo(id);
      alert("삭제가 완료되었습니다.");
    }
  };

  // 토글
  const handleDoneToggleButton = () => {
    toggleDoneTodo(id, isDone);
  };

  return (
    <li>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{deadline}</p>
      <button onClick={handleDeleteButton}>삭제</button>
      <button onClick={handleDoneToggleButton}>
        {isDone ? "할 일 완료" : "할 일 취소"}
      </button>
    </li>
  );
};

export default TodoItem;
