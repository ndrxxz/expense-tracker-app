import React from "react";
import { EmptyState } from "@/components/ui";
import { RiDeleteBinLine } from "react-icons/ri";
import { formatDate, categoryIcons } from "@/utils";

function ExpenseList({ expenses, handleDelete }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col gap-3">
      <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">
        Expenses
      </div>

      {expenses.length > 0 ? (
        <div className="flex flex-col max-h-120 overflow-y-auto">
          {expenses.map((expense) => {
            return (
              <div
                key={expense.id}
                className="flex items-center gap-2.5 py-2.5 border-b border-zinc-600 last:border-b-0"
              >
                <div className="w-9 h-9 rounded-xl bg-zinc-700 flex items-center justify-center text-base shrink-0">
                  {categoryIcons(expense.category)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                    {expense.description}
                  </div>
                  <div className="text-xs text-zinc-500">
                    {expense.category} · {formatDate(expense.date)}
                  </div>
                </div>

                <div className="text-sm font-semibold text-red-400">
                  -₱{expense.amount}
                </div>

                <div
                  className="cursor-pointer text-xl px-1 w-auto"
                  onClick={() => handleDelete(expense.id)}
                >
                  <RiDeleteBinLine />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}

export default ExpenseList;
