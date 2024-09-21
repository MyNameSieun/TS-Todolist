// src/hooks/useTodos.tsx

import { useState } from "react";
import { Todo } from "../types/todo.type";

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

  return {
    todos,
    addTodo,
    deleteTodo,
  };
};
