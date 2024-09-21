import { useEffect } from "react";
import { useTodoStore } from "../../store/todoStore";
import TodoItem from "./TodoItem";
import { Todo } from "../../types/todo.type";

interface TodoListProps {
  todoTitle: string;
  todos: Todo[];
}

const TodoList = ({ todoTitle, todos }: TodoListProps) => {
  const { fetchTodos, loading } = useTodoStore();

  useEffect(() => {
    fetchTodos();
  }, []);

  if (loading) {
    return <p>로딩중...</p>;
  }

  return (
    <>
      <h1>{todoTitle}</h1>

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
