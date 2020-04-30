import React from "react";
import "./TodoList.css";

export type Todo = {
  id: string;
  text: string;
};

interface Props {
  items: Todo[];
  removeTodo: (todoId: string) => void;
}

const TodoList: React.FC<Props> = ({ items, removeTodo }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={() => removeTodo(item.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
