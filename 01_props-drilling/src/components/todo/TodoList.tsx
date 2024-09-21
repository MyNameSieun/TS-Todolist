// src/components/todo/TodoList.tsx

import { Todo } from "../../types/todo.type";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  todoTitle: string;
  deleteTodo: (id: string) => void;
  patchTodo: (id: string, updateTodo: Pick<Todo, "title" | "content">) => void;
  toggleTodoDone: (id: string) => void;
}

const TodoList = ({
  todos,
  todoTitle,
  deleteTodo,
  patchTodo,
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
            patchTodo={patchTodo}
            toggleTodoDone={toggleTodoDone}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
