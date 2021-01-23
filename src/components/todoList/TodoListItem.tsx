import React from 'react'
import { ITodo } from '../../models/todo'
import { todoAction } from '../../types/todoAction'

interface IProps {
  todo: ITodo;
  updateTodo: todoAction;
  removeTodo: todoAction;
}

export const TodoListItem: React.FC<IProps> = ({ todo, updateTodo, removeTodo }) => {

  return (
    <li className={todo.done ? 'done' : 'not-done'}>
      { todo.desc}
      <button onClick={() => updateTodo({
        ...todo,
        done: !todo.done
      })}>{ todo.done ? 'Undo Thing' : 'Do Thing' }</button >
      <button onClick={() => removeTodo(todo)}>Remove</button >
    </li >
  )
}