"use client"

import { useTodos } from "@/store/todos"
import { useSearchParams } from "next/navigation";

const Todos = () => {
    const {todos, toggleTodoAsCompleted, handleTodoDelete} = useTodos();
    const searchParams = useSearchParams();
    const todosFilter = searchParams.get("todos")
   
    let filterTodos = todos;

    if(todosFilter == 'active'){
        filterTodos = filterTodos.filter((todo)=> !todo.completed)
    } else if (todosFilter == 'completed'){
        filterTodos = filterTodos.filter((todo)=> todo.completed)
    }

  return (
   <ul className="flex flex-col w-full mt-2">
  {
    filterTodos.map((todo) => {
return <li key={todo.id} className="flex items-center mt-1">

    <input type="checkbox" className="mr-1" id={`todo - ${todo.id}`} checked={todo.completed} onChange={()=>toggleTodoAsCompleted(todo.id)}/>

    <label htmlFor={`todo - ${todo.id}`}>{todo.task}</label>
    {
        todo.completed && (<button type="button" className="border border-black rounded-md ml-auto px-2 hover:bg-black hover:text-white" onClick={()=>{handleTodoDelete(todo.id)}}> Delete</button>)
    }

</li>
    })
  }
   </ul>
  )
}

export default Todos