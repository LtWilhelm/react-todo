import React from 'react'
import { ITodo } from '../../models/todo'
import { todoAction } from '../../types/todoAction'
import "./TodoList.css"
import { TodoListItem } from './TodoListItem'

interface IProps {
  todos: ITodo[];
  updateTodo: todoAction;
  removeTodo: todoAction;
}

export const TodoList: React.FC<IProps> = ({todos, updateTodo, removeTodo}) => {
  return (
    <ul>
      {todos.map(t => (
        <TodoListItem key={t.id} todo={t} updateTodo={updateTodo} removeTodo={removeTodo} />
      ))}
    </ul>
  )
}