import { useState } from "react";
import {
  deleteTodo,
  fetchTodo,
  toggleDoneTodo,
  updateTodo,
} from "../../api/todos";
import { Todo } from "../../types/todo.type";

interface TodoListProps {
  todoTitle: string;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todoTitle, todos, setTodos }: TodoListProps) => {
  const [editTodo, setEditTodo] = useState<Todo | null>(null);

  // 삭제
  const handleDeleteButton = async (id: string) => {
    const deleteConfirm = window.confirm("정말 삭제하시겠습니까?");

    if (deleteConfirm) {
      await deleteTodo(id);
      alert("삭제 완료!");

      const response = await fetchTodo();
      setTodos(response?.data);
    }
  };

  // 수정
  const handleEditButton = async () => {
    if (editTodo) {
      try {
        await updateTodo(editTodo.id, editTodo);
        setEditTodo(null);
        alert("수정 완료!");

        const response = await fetchTodo();
        setTodos(response?.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  // 완료/미완료 토글
  const handleDoneToggleButton = async (id: string, isDone: boolean) => {
    try {
      await toggleDoneTodo(id, isDone);
      const response = await fetchTodo();
      setTodos(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>{todoTitle}</h1>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editTodo && editTodo.id === todo.id ? (
              <>
                <input
                  value={editTodo.title}
                  onChange={(e) =>
                    setEditTodo({ ...editTodo, title: e.target.value })
                  }
                />
                <input
                  value={editTodo.content}
                  onChange={(e) =>
                    setEditTodo({ ...editTodo, content: e.target.value })
                  }
                />
                <button onClick={() => setEditTodo(null)}>수정 취소</button>
                <button onClick={handleEditButton}>수정 완료</button>
              </>
            ) : (
              <>
                <h2>{todo.title}</h2>
                <p>{todo.content}</p>
                <button onClick={() => handleDeleteButton(todo.id)}>
                  삭제
                </button>
                <button onClick={() => setEditTodo(todo)}>수정</button>
                <button
                  onClick={() => handleDoneToggleButton(todo.id, todo.isDone)}
                >
                  {todo.isDone ? "할 일 취소" : "할 일 완료"}
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
