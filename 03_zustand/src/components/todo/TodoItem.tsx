import { useTodoStore } from "../../store/todoStore";
import { Todo } from "../../types/todo.type";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { id, title, content, deadline, isDone } = todo;
  const { deleteTodo } = useTodoStore();

  // 삭제
  const handleDeleteButton = () => {
    deleteTodo(id);
    alert("삭제가 완료되었습니다.");
  };

  return (
    <li>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{deadline}</p>
      <button onClick={handleDeleteButton}>삭제</button>
    </li>
  );
};

export default TodoItem;
