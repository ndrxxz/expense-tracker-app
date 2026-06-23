import React from "react";
import { Navbar, Hero } from "@/components";
import { Expenses } from "@/components/expenses";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col gap-6">
      <Navbar />
      <Hero />
      <Expenses />
    </div>
  );
}

export default App;
