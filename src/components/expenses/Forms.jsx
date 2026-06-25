import React from "react";
import { BudgetForm, ExpenseForm } from "@/components/expenses/form";

function Forms({ onSetBudget }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col gap-3">
        <BudgetForm onSetBudget={onSetBudget} />
      <div className="h-px bg-zinc-500 my-4"></div>
        <ExpenseForm />
    </div>
  );
}

export default Forms;
