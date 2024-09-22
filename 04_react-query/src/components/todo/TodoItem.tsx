import { Todo } from "../../types/todo.type";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { id, title, content, deadline, isDone } = todo;
  return (
    <li>
      <p>{title}</p>
      <p>{content}</p>
      <p>{deadline}</p>
    </li>
  );
};

export default TodoItem;
