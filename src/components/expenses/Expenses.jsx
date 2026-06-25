import React, { useState } from "react";
import { SummaryBars, Forms, ExpenseList } from "@/components/expenses";

function Expenses() {
  const [totalBudget, setTotalBudget] = useState(0);

  const handleSetBudget = (newBudget) => {
    setTotalBudget(newBudget);
  }
  return (
    <div className="flex justify-center px-4">
      <div className="flex flex-col gap-3 w-4xl">
        <SummaryBars budget={totalBudget} />

        <div className="grid grid-cols-2 gap-3 items-start">
          <Forms onSetBudget={handleSetBudget} />
          <ExpenseList />
        </div>
      </div>
    </div>
  );
}

export default Expenses;
