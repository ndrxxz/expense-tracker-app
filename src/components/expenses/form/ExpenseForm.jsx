import { Button, FormField, Select } from "@/components/ui";
import React from "react";

function ExpenseForm() {
  const options = [
    { value: "Food", label: "🍔 Food" },
    { value: "Transport", label: "🚌 Transport" },
    { value: "Bills", label: "⚡ Bills" },
    { value: "Shopping", label: "🛍️ Shopping" },
    { value: "Other", label: "📦 Other" },
  ];

  return (
    <form className="flex flex-col gap-3">
      <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">
        Add expenses
      </div>

      <FormField
        label="Description"
        id="input-desc"
        type="text"
        placeholder="e.g. Jollibee lunch"
      />

      <FormField
        label="Amount (₱)"
        id="input-amount"
        type="number"
        placeholder="e.g. 0.00"
      />

      <Select label="Category" id="input-category" options={options} />

      <FormField
        label="Date"
        id="input-date"
        type="date"
      />

      <Button label={"+ Add expense"} />
    </form>
  );
}

export default ExpenseForm;
