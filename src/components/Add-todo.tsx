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
    <form onSubmit={handleFormSubmit} className='flex justify-between'>
<input type='text' placeholder='Write Your Todo' name='' className='border border-black px-2 py-1 rounded-md w-4/5' value={todo} onChange={(event)=>{setTodo(event.target.value)}}/>
<button type='submit' className='text-black border border-solid border-black rounded-md px-4 py-1 hover:bg-black hover:text-white'>Add</button>
    </form>
  )
}

export default AddtoDo