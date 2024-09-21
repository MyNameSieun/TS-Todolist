import axios from "axios";
import { Todo } from "../types/todo.type";
import { create } from "zustand";
const baseURL = import.meta.env.VITE_SERVER_URL;

// Axios 인스턴스 생성
const todoAxios = axios.create({ baseURL });

interface TodoState {
  todos: Todo[];
  loading: boolean;
  fetchTodos: () => Promise<void>;
  addTodo: (todo: Todo) => Promise<void>;
  //   deleteTodo: (id: number) => Promise<void>;
  //   editTodo: (id: number, updatedData: Partial<Todo>) => Promise<void>;
  //   toggleTodo: (id: number) => Promise<void>;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  loading: false,

  // todos 조회
  fetchTodos: async () => {
    try {
      set({ loading: true });
      const response = await todoAxios.get<Todo[]>(`/todos`);
      set({ todos: response.data });
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },

  // todos 추가
  addTodo: async (todo: Todo) => {
    try {
      const response = await todoAxios.post(`/todos`, todo);
      set((state) => ({ todos: [...state.todos, response.data] }));
    } catch (error) {
      console.error(error);
    }
  },
}));
