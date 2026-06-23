import React from "react";
import { SummaryBar } from "@/components/expenses";

function Expenses() {
  return (
    <div className="flex flex-col gap-3 px-4">
      <SummaryBar />
    </div>
  );
}

export default Expenses;
