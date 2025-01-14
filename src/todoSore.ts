import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";

type ToDo = { id: string; todoTitle: string };
type ToDos = ToDo[];
type Action = { type: string; payload: string };

//  const addTodo = (text: string) => {
//   return {
//     type: "ADD_TODO",
//     text,
//   };
// };
//  const deleteTodo = (id: string) => {
//   return {
//     type: "DELETE_TODO",
//     id,
//   };
// };

// 자동으로 type과 payload를 반환하는 함수를 만들어줌
const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

//console.log( addTodo());  //  {type:'ADD',payload:'undefined'}

// const reducer = (state: ToDos = [], action: Action) => {
//   switch (action.type) {
//     case addTodo.type:
//       console.log(action)
//       {
//         const newTodo: ToDo = { id: uuidv4(), todoTitle: action.payload };
//         return [newTodo, ...state];
//       }
//       break;
//     case deleteTodo.type:
//       return state.filter((todo) => todo.id !== action.payload);
//       break;
//     default:
//       return state;
//   }
// };

// toolkit 이 reducer
const reducer = createReducer([], (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      state.push({ todoTitle: action.payload, id: uuidv4() });
    })

    .addCase(deleteTodo, (state, action) =>
      state.filter((ToDo) => ToDo.id !== action.payload)
    );
});

const todoStore = createStore(reducer);

export const actionCreators = {
  addTodo,
  deleteTodo,
};
export default todoStore;
