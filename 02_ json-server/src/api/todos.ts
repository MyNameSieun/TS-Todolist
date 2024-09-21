import axios from "axios";
import { Todo } from "../types/todo.type";

// process.env.REACT_APP_SERVER_URL 왜 오류나는지 체크하기
const todosAxios = axios.create({
  baseURL: `http://localhost:4000`,
});

// 읽기
export const fetchTodo = async () => {
  try {
    return await todosAxios.get(`/todos`);
  } catch (error) {
    console.error(error);
  }
};

// 추가
export const createTodo = async (todo: Todo) => {
  try {
    return await todosAxios.post(`/todos`, todo);
  } catch (error) {
    console.error(error);
  }
};

// 삭제
export const deleteTodo = async (id: string) => {
  try {
    return await todosAxios.delete(`/todos/${id}`);
  } catch (error) {
    console.error(error);
  }
};

// 수정
export const updateTodo = async (id: string, todo: Todo) => {
  try {
    return await todosAxios.patch(`/todos/${id}`, todo);
  } catch (error) {
    console.error(error);
  }
};
// 토글
export const toggleDoneTodo = async (id: string, isDone: boolean) => {
  try {
    return await todosAxios.patch(`/todos/${id}`, { isDone: !isDone });
  } catch (error) {
    console.error(error);
  }
};
