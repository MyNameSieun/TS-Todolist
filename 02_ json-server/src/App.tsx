import { useEffect, useState } from "react";
import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import { Todo } from "./types/todo.type";
import { fetchTodo } from "./api/todos";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTodo = async () => {
      try {
        const response = await fetchTodo();
        setTodos(response && response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadTodo();
  }, []);

  if (loading) {
    return <p>로딩중...</p>;
  }

  // Todo 필터링
  const inProgressTodos = todos.filter((todo) => todo.isDone === false);
  const doneTodos = todos.filter((todo) => todo.isDone === true);

  return (
    <>
      <TodoForm setTodos={setTodos} />
      <TodoList
        todoTitle="In Progress"
        todos={inProgressTodos}
        setTodos={setTodos}
      />
      <TodoList todoTitle="Done" todos={doneTodos} setTodos={setTodos} />
    </>
  );
};

export default App;
