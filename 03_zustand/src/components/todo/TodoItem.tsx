import { Todo } from "../../types/todo.type";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { title, content, deadline } = todo;

  // 삭제
  const handleDeleteButton = () => {};

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
