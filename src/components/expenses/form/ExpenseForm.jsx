import { Button, FormField, Select } from "@/components/ui";
import { categoryOptions } from "@/data";
import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [descInput, setDescInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      description: descInput,
      amount: parseFloat(amountInput),
      category: categoryInput,
      date: dateInput
    }

    onAddExpense(newExpense);

    setDescInput("");
    setAmountInput("");
    setCategoryInput("");
    setDateInput("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">
        Add expenses
      </div>

      <FormField
        label="Description"
        id="input-desc"
        type="text"
        value={descInput}
        onChange={(e) => setDescInput(e.target.value)}
        placeholder="e.g. Jollibee lunch"
      />

      <FormField
        label="Amount (₱)"
        id="input-amount"
        type="number"
        value={amountInput}
        onChange={(e) => setAmountInput(e.target.value)}
        placeholder="e.g. 0.00"
      />

      <Select
        label="Category"
        id="input-category"
        options={categoryOptions}
        value={categoryInput}
        onChange={(e) => setCategoryInput(e.target.value)}
      />

      <FormField
        label="Date"
        id="input-date"
        type="date"
        value={dateInput}
        onChange={(e) => setDateInput(e.target.value)}
      />

      <Button label={"+ Add expense"} />
    </form>
  );
}

export default ExpenseForm;
