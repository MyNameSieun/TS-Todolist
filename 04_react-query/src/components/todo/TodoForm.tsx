import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "../../api/todos";
import { QUERY_KEYS } from "../hooks/query/key.constand";

const TodoForm = () => {
  const queryClient = useQueryClient();

  // 추가
  const addTodoMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS] });
      alert("추가가 완료되었습니다.");
    },
    onError: (error) => {
      console.error("추가 실패", error);
      alert("추가 실패. 다시 시도해 주세요.");
    },
  });

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    // 유효성 검사
    if (!title.trim()) {
      return alert("제목을 입력해 주세요.");
    }
    if (!content.trim()) {
      return alert("내용을 입력해 주세요.");
    }

    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
      deadline: new Date().toLocaleDateString(),
    };

    addTodoMutation.mutate(nextTodo);

    form.reset();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label htmlFor="title">제목: </label>
        <input id="title" name="title" />
      </div>
      <div>
        <label htmlFor="content">내용: </label>
        <input id="content" name="content" />
      </div>
      <button type="submit">제출</button>
    </form>
  );
};

export default TodoForm;
