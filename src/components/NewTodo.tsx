import React, { useRef } from "react";
import { Todo } from "./TodoList";
import "./NewTodo.css";

interface Props {
  addTodo: (todo: Todo) => void;
}

const NewTodo: React.FC<Props> = ({ addTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    addTodo({ id: Math.random().toString(), text: enteredText });
    textInputRef.current!.value = "";
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='todo-text'>Todo Text</label>
        <input ref={textInputRef} type='text' id='todo-text' />
      </div>
      <button type='submit'>ADD TODO</button>
    </form>
  );
};

export default NewTodo;
