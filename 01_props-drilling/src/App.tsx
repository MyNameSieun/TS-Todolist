// src/App.tsx

import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import { useTodos } from "./hooks/useTodos";

const App: React.FC = () => {
  const { todos, addTodo } = useTodos();

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
