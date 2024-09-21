import { useTodoStore } from "../../store/todoStore";

const TodoForm = () => {
  const { addTodo } = useTodoStore();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const form = e.currentTarget;

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    if (!title.trim()) {
      return alert("제목을 입력해주세요.");
    }
    if (!content.trim()) {
      return alert("내용을 입력해주세요.");
    }

    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
      deadline: new Date().toLocaleDateString(),
    };

    addTodo(nextTodo);
    alert("추가 완료!");

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
