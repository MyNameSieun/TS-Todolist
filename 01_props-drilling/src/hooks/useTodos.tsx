// src/hooks/useTodos.tsx

import { useState } from "react";
import { DoneTodo, InProgressTodo, Todo } from "../types/todo.type";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // 추가
  const addTodo = (todo: Todo) => {
    setTodos((prevTodos) => [todo, ...prevTodos]);
  };

  // 삭제
  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // 토글
  const toggleTodoDone = (id: string) => {
    const toggleTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(toggleTodos);
  };

  // Todo 필터링
  const inProgressTodos = todos.filter(
    (todo) => !todo.isDone
  ) as InProgressTodo[];

  const doneTodos = todos.filter((todo) => todo.isDone) as DoneTodo[];

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodoDone,
    inProgressTodos,
    doneTodos,
  };
};
