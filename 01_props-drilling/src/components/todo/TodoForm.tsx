// src/components/todo/TodoForm.tsx

import { Todo } from "../../types/todo.type";

interface TodoFormProps {
  addTodo: (todo: Todo) => void;
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    if (!title.trim()) {
      return alert("제목을 입력하세요.");
    }

    if (!content.trim()) {
      return alert("내용을 입력하세요.");
    }

    const nextTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
      deadline: new Date().toLocaleDateString(),
    };
    addTodo(nextTodo);

    e.currentTarget.reset();

    alert("추가 완료!");
  };

  return (
    <form onSubmit={handleSubmit}>
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
