import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./key.constand";
import { fetchTodos } from "../../../api/todos";

export const useTodosQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.TODOS], // 쿼리 키 사용
    queryFn: fetchTodos,
  });
};
