// src/App.tsx

import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";

const App = () => {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
