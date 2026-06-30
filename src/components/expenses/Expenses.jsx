import React, { useEffect, useState } from "react";
import { SummaryBars, Forms, ExpenseList } from "@/components/expenses";

function Expenses() {
  const [totalBudget, setTotalBudget] = useState(() => {
    const stored = localStorage.getItem("budget");
    return stored ? JSON.parse(stored) : 0;
  });
  const [totalExpense, setTotalExpense] = useState(() => {
    const stored = localStorage.getItem("expenses");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(totalExpense));
  }, [totalExpense]);

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(totalBudget));
  }, [totalBudget]);

  const handleSetBudget = (newBudget) => {
    setTotalBudget(newBudget);
  }

  const handleSetExpense = (newExpense) => {
    setTotalExpense([...totalExpense, newExpense]);
  }

  const handleDelete = (deleteId) => {
    setTotalExpense(prev => prev.filter(expense => expense.id !== deleteId));
  }

  const totalAmount = totalExpense.reduce((sum, expense) => sum + expense.amount, 0);

  const totalRemaining = totalBudget - totalAmount;

  return (
    <div className="flex justify-center px-4">
      <div className="flex flex-col gap-3 w-4xl">
        <SummaryBars budget={totalBudget} spent={totalAmount} remaining={totalRemaining} />

        <div className="grid grid-cols-2 gap-3 items-start">
          <Forms onSetBudget={handleSetBudget} onAddExpense={handleSetExpense} />
          <ExpenseList expenses={totalExpense} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default Expenses;
