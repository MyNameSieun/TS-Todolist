import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import { useTodoStore } from "./store/todoStore";
import { DoneTodo, InProgressTodo } from "./types/todo.type";

const App: React.FC = () => {
  const { todos } = useTodoStore();

  const inProgressTodos = todos.filter(
    (todo) => todo.isDone
  ) as InProgressTodo[];
  const doneTodos = todos.filter((todo) => !todo.isDone) as DoneTodo[];

  return (
    <>
      <TodoForm />
      <TodoList todoTitle="In Progress" todos={inProgressTodos} />
      <TodoList todoTitle="Done" todos={doneTodos} />
    </>
  );
};

export default App;
