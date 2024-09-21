import { deleteTodo, fetchTodo } from "../../api/todos";
import { Todo } from "../../types/todo.type";

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  const handleDeleteButton = async (id: string) => {
    const deleteConfirm = window.confirm("정말 삭제하시겠습니까?");

    if (deleteConfirm) {
      await deleteTodo(id);
      alert("삭제 완료!");

      const response = await fetchTodo();
      setTodos(response && response.data);
    }
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <h2>{todo.title}</h2>
          <p>{todo.content}</p>
          <button onClick={() => handleDeleteButton(todo.id)}>삭제</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
