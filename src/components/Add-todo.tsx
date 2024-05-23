"use client"
import React, { FormEvent, useState } from 'react'
import { useTodos } from '@/store/todos';

const AddtoDo = () => {
  const [todo, setTodo] = useState("");
  const {handleAddToDo} = useTodos();
  
  const handleFormSubmit = (e:FormEvent<HTMLFormElement>) =>{
e.preventDefault();
handleAddToDo(todo);
setTodo("");
}

  return (
    <form onSubmit={handleFormSubmit}>
<input type='text' placeholder='write your todo' name='' value={todo} onChange={(event)=>{setTodo(event.target.value)}}/>
<button type='submit' className='text-black border border-solid ml-2 px-4'>Add</button>
    </form>
  )
}

export default AddtoDo