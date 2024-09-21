// src/App.tsx

import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import { useTodos } from "./hooks/useTodos";

const App: React.FC = () => {
  const { addTodo, deleteTodo, toggleTodoDone, inProgressTodos, doneTodos } =
    useTodos();

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todoTitle="In Progress"
        todos={inProgressTodos}
        deleteTodo={deleteTodo}
        toggleTodoDone={toggleTodoDone}
      />
      <TodoList
        todoTitle="Done"
        todos={doneTodos}
        deleteTodo={deleteTodo}
        toggleTodoDone={toggleTodoDone}
      />
    </div>
  );
};

export default App;
