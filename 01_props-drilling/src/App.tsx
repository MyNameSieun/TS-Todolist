// src/App.tsx

import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import { useTodos } from "./hooks/useTodos";

const App: React.FC = () => {
  const {
    addTodo,
    deleteTodo,
    patchTodo,
    toggleTodoDone,
    inProgressTodos,
    doneTodos,
  } = useTodos();

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todoTitle="In Progress"
        todos={inProgressTodos}
        deleteTodo={deleteTodo}
        patchTodo={patchTodo}
        toggleTodoDone={toggleTodoDone}
      />
      <TodoList
        todoTitle="Done"
        todos={doneTodos}
        deleteTodo={deleteTodo}
        patchTodo={patchTodo}
        toggleTodoDone={toggleTodoDone}
      />
    </>
  );
};

export default App;
