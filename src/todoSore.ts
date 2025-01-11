import { createStore } from "redux";
import { v4 as uuidv4 } from "uuid";

type ToDo = { id: string; todoTitle: string };
type ToDos = ToDo[];
type Action = { type: string; text: string; id: string  };

export const addTodo = (text: string) => {
  return {
    type: "ADD_TODO",
    text,
  };
};
export const deleteTodo = (id: string) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};

const reducer = (state: ToDos = [], action: Action) => {
  switch (action.type) {
    case "ADD_TODO":
      {
        const newTodo: ToDo = { id: uuidv4(), todoTitle: action.text };
        return [newTodo, ...state];
      }
      break;
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
      break;
    default:
      return state;
  }
};

const todoStore = createStore(reducer);

export default todoStore;
