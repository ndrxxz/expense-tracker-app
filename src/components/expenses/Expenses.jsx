import React from "react";
import { SummaryBar, Forms, ExpenseList } from "@/components/expenses";

function Expenses() {
  return (
    <div className="flex justify-center px-4">
      <div className="flex flex-col gap-3 w-4xl">
        <SummaryBar />

        <div className="grid grid-cols-2 gap-3 items-start">
          <Forms />
          <ExpenseList />
        </div>
      </div>
    </div>
  );
}

export default Expenses;
