import React, { Fragment, useState, useRef  } from 'react';
import {v4 as uuidv4} from 'uuid';
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);

  const todoTaskRef = useRef();

  const toggleTodo = (id) =>{
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value;
    if (task === '') return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), task, complete: false }];
    })
    todoTaskRef.current.value = null;
  }

  const handlerClearAll = () => {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <Fragment>
      <TodoList todos= {todos} toggleTodo= {toggleTodo} />
      <input ref = {todoTaskRef} type="text" placeholder="Nueva tarea" />
      <button onClick={handleTodoAdd}>➕</button>
      <button onClick={handlerClearAll}>🗑️</button>
      <div>Te queda {todos.filter((todo) => !todo.complete).length} tareas por termianr</div>
    </Fragment>
  );
}

export default App;
