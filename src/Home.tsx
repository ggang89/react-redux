import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";

type Todo = {
  id: string;
  todoTitle: string;
}
 
function Home() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo: Todo = { id: uuidv4(), todoTitle: text };
    setTodos([todo, ...todos]);
    setText("");
  }; 

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          value={text}
          onChange={handleText}
          placeholder="무엇을 할까요?"
        />
        <button type="submit">추가</button>
      </form>
      <ul>{todos.map((todo) => (
        todo.todoTitle
      ))}</ul>
    </>
  );
}

export default Home;
