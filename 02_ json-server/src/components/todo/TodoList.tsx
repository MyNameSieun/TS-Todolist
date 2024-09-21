import { deleteTodo, fetchTodo, toggleDoneTodo } from "../../api/todos";
import { Todo } from "../../types/todo.type";

interface TodoListProps {
  todoTitle: string;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todoTitle, todos, setTodos }: TodoListProps) => {
  // 삭제
  const handleDeleteButton = async (id: string) => {
    const deleteConfirm = window.confirm("정말 삭제하시겠습니까?");

    if (deleteConfirm) {
      await deleteTodo(id);
      alert("삭제 완료!");

      const response = await fetchTodo();
      setTodos(response?.data);
    }
  };

  // 토글
  const handleDoneToggleButton = async (id: string, isDone: boolean) => {
    try {
      toggleDoneTodo(id, isDone);
      const response = await fetchTodo();
      setTodos(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>{todoTitle}</h1>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.content}</p>
            <button onClick={() => handleDeleteButton(todo.id)}>삭제</button>
            <button
              onClick={() => handleDoneToggleButton(todo.id, todo.isDone)}
            >
              {todo.isDone ? "할 일 취소" : "할 일 완료"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
