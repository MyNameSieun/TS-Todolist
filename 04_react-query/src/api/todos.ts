import axios from "axios";
import { Todo } from "../types/todo.type";

const baseURL = import.meta.env.VITE_SERVER_URL;

const todosAxios = axios.create({
  baseURL,
});

// todo 조회
export const fetchTodos = async () => {
  const response = await todosAxios.get(`/todos`);
  return response.data;
};

// todo 작성
export const addTodo = async (todo: Todo) => {
  return await todosAxios.post(`/todos`, todo);
};

// todo 삭제
export const deleteTodo = async (id: string) => {
  return await todosAxios.delete(`/todos/${id}`);
};

// todo 수정
export const updateTodo = async (id: string, todo: Todo) => {
  return await todosAxios.patch(`/todos/${id}`, todo);
};

// todo 토글
export const toggleDoneTodo = async (id: string, isDone: boolean) => {
  return await todosAxios.patch(`/todos/${id}`, { isDone: !isDone });
};
