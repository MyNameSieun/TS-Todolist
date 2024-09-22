import { useTodosQuery } from "./components/hooks/query/useQuery";
import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import { DoneTodo, InProgressTodo, Todo } from "./types/todo.type";

const App: React.FC = () => {
  const { data: todos = [], isLoading, error } = useTodosQuery();

  if (isLoading) {
    return <p>로딩중...</p>;
  }

  if (error) {
    return <p>에러 발생: {error.message}</p>;
  }

  // Todo 필터링
  const inProgressTodos = todos.filter(
    (todo: Todo) => todo.isDone
  ) as InProgressTodo[];
  const doneTodos = todos.filter((todo: Todo) => !todo.isDone) as DoneTodo[];

  return (
    <>
      <TodoForm />
      <TodoList todoTitle="In Progress" todos={inProgressTodos} />
      <TodoList todoTitle="Done" todos={doneTodos} />
    </>
  );
};

export default App;
