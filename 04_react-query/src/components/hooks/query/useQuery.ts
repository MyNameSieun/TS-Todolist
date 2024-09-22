import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./keys.constant";
import { fetchTodos } from "api/todos";

export const useTodosQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.TODOS], // 쿼리 키 사용
    queryFn: fetchTodos,
  });
};
