import React from "react";
import AddtoDo from "@/components/Add-todo";
import Todos from "@/components/todos";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="text-center"><h2>TODO NEXT + TYPESCRIPT</h2>
    <Navbar/>
    <AddtoDo/>
    <Todos />
    </main>
  );
}
