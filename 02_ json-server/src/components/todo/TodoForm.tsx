import { createTodo, fetchTodo } from "../../api/todos";
import { Todo } from "../../types/todo.type";

interface TodoFormProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoForm = ({ setTodos }: TodoFormProps) => {
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget; // form 요소를 변수에 저장
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    if (!title.trim()) {
      return alert("제목을 입력하세요.");
    }

    if (!content.trim()) {
      return alert("내용을 입력하세요.");
    }

    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
      deadline: new Date().toLocaleDateString(),
    };

    await createTodo(nextTodo);
    alert("추가 완료!");
    form.reset(); // 저장된 form 변수를 사용

    const response = await fetchTodo();
    setTodos(response && response.data);
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
