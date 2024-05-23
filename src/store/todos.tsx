'use client'
import { createContext, ReactNode, useState, useContext } from "react";

export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
}

export type ToDosContext = {
    todos: Todo[];
    handleAddToDo: (task: string) => void;
    toggleTodoAsCompleted: (id: string) => void;
    handleTodoDelete:(id:string) => void;
}

export const todosContext = createContext<ToDosContext | null>(null);

export const TodosProvider = ({ children }: { children: ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>(  () => {const newTodos = localStorage.getItem("todos" || "[]")
    return JSON.parse(newTodos) as Todo[];})
    
    const handleAddToDo = (task: string) => {
        setTodos((prev) => {
            const newTodos: Todo[] = [{
                id: Math.random().toString(),
                task,
                completed: false,
                createdAt: new Date()
            },
            ...prev]
            localStorage.setItem("todos", JSON.stringify(newTodos))
            return newTodos;
        })
    }
    // if task is completed 
    const toggleTodoAsCompleted = (id: string) => {
        setTodos((prev) => {
            const newTodos = prev.map((task) => {
                if (task.id === id) {return {...task, completed: !task.completed }}
                 return task })
                 localStorage.setItem("todos", JSON.stringify(newTodos))
            return newTodos
        })
    }

    // if task is deleted 

    const handleTodoDelete = (id:string) => {
setTodos((prev) => { 
    const newTodos = prev.filter((task)=>task.id !== id);
    localStorage.setItem("todos", JSON.stringify(newTodos))
    return newTodos;
})
    }

    return (
        <todosContext.Provider value={{ todos, handleAddToDo, toggleTodoAsCompleted, handleTodoDelete }}>
            {children}
        </todosContext.Provider>
    )

}



export function useTodos() {
    const todosContextValue = useContext(todosContext)
    if (!todosContext) {
        throw new Error()
    }
    return todosContextValue;
}
