import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import { useTodoStore } from "./store/todoStore";

const App: React.FC = () => {
  const { todos } = useTodoStore();

  const inProgressTodos = todos.filter((todo) => todo.isDone === true);
  const doneTodos = todos.filter((todo) => todo.isDone === false);

  return (
    <>
      <TodoForm />
      <TodoList todoTitle="In Progress" todos={inProgressTodos} />
      <TodoList todoTitle="Done" todos={doneTodos} />
    </>
  );
};

export default App;
