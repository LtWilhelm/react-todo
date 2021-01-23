import React, { useState } from 'react'
import { v4 } from 'uuid';
import { todoAction } from '../../types/todoAction';
import './Composer.css';

interface IProps {
  addTodo: todoAction;
}

export const Composer: React.FC<IProps> = ({addTodo}) => {
  const [desc, setDesc] = useState<string>('');
  
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo({
      id: v4(),
      desc,
      done: false
    })
    setDesc('');
  }
  
  return (
    <form onSubmit={onSubmit}>
      <div className="form">
        <div><textarea placeholder="Add Todo..." value={desc} onChange={(e) => setDesc(e.target.value)}></textarea></div>
        <div><button type="submit">Add Todo</button></div>
      </div>
    </form>
  )
}