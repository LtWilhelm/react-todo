import React, { useEffect, useState } from 'react';
import './App.css';
import { Composer } from './components/composer/Composer';
import { Header } from './components/header/Header';
import { TodoList } from './components/todoList/TodoList';
import { ITodo } from './models/todo';

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const getTodos = () => {
    let todos = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(todos);
  }

  useEffect(getTodos, []);
  
  const updateTodo = (todo: ITodo) => {
    const temp: ITodo[] = [...todos];
    const index = temp.findIndex(t => t.id === todo.id);
    
    temp[index] = todo;
    
    setTodos(temp);
  }
  
  const removeTodo = (todo: ITodo) => {
    const temp: ITodo[] = [...todos];
    const index = temp.findIndex(t => t.id === todo.id);
    
    temp.splice(index, 1);
    
    setTodos(temp);
  }
  
  const addTodo = (todo: ITodo) => {
    const temp: ITodo[] = [...todos];
    temp.push(todo);
    setTodos(temp);
  }
  
  const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  useEffect(saveTodos, [todos]);

  return (
    <>
      <Header/>
      <div className="container">
        <TodoList todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
        <Composer addTodo={addTodo} />
      </div>
    </>
  );
}

export default App;
