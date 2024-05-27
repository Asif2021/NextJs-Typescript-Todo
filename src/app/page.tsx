import React from "react";
import AddtoDo from "@/components/Add-todo";
import Todos from "@/components/todos";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="text-center max-w-[800px] mr-auto ml-auto">
      <h1 className="text-lg font-bold my-2">TODO NEXT + TYPESCRIPT</h1>
      <div className="max-w-[400px] mx-auto">
    <Navbar/>
    <AddtoDo/>
    <Todos />
      </div>
    </main>
  );
}
