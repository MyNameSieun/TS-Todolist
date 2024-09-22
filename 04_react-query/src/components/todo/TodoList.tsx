import { Todo } from "../../types/todo.type";
import { useTodosQuery } from "../hooks/query/useQuery";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { data: todos, isLoading, error } = useTodosQuery();

  if (isLoading) {
    return <p>로딩중...</p>;
  }

  if (error) {
    return <p>에러 발생: {error.message}</p>;
  }

  return (
    <ul>
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
