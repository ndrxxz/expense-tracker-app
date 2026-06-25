import React from "react";
import { EmptyState } from "@/components/ui";

function ExpenseList() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col gap-3">
      <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">
        Expenses
      </div>

      <EmptyState />

      <div className="flex flex-col max-h-120 overflow-y-auto">
        
      </div>
    </div>
  );
}

export default ExpenseList;
