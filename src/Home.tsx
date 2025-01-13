import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { connect } from "react-redux";
import "./App.css";
import { actionCreators } from "./todoSore";

type Todo = {
  id: string;
  todoTitle: string;
}
 
function Home({toDos,addToDo}) {
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
    addToDo(text);
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

function mapStateToProps(state) {
  // 내가 만든 state를 Home 컴포넌트의 props로 전달
  return { toDos: state };
}
function mapDispatchToProps(dispatch) {
  return {
    // 내가 만든 함수를 Home 컴포넌트의 props로 전달
    addToDo:(text:string)=>dispatch(actionCreators.addTodo(text))
  };
}




export default connect(mapStateToProps, mapDispatchToProps)(Home);

// connet()함수 인자중 1개만 사용할 경우 빈자리에 null 입력
// => connet(null,mapDispatchToProps)(Home);
