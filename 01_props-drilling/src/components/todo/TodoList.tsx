// src/components/todo/TodoList.tsx

import { Todo } from "../../types/todo.type";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  todoTitle: string;
  deleteTodo: (id: string) => void;
  toggleTodoDone: (id: string) => void;
}

const TodoList = ({
  todos,
  todoTitle,
  deleteTodo,
  toggleTodoDone,
}: TodoListProps) => {
  return (
    <section>
      <h2>{todoTitle}</h2>

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodoDone={toggleTodoDone}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
