import React, { useState } from "react";
import TodoList, { Todo } from "./components/TodoList";
import NewTodo from "./components/NewTodo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo): void => {
    setTodos((todos) => todos.concat(todo));
  };
  const deleteTodo = (todoId: string): void => {
    setTodos((todos) => todos.filter((todo) => todo.id !== todoId));
  };
  return (
    <div className='App'>
      <NewTodo addTodo={addTodo} />
      <TodoList removeTodo={deleteTodo} items={todos} />
    </div>
  );
};

export default App;
