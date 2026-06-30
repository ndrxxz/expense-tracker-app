import { Button, FormField, Select } from "@/components/ui";
import { categoryOptions } from "@/data";
import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [form, setForm] = useState({
    descInput: "",
    amountInput: "",
    categoryInput: "",
    dateInput: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { descInput, amountInput, categoryInput, dateInput } = form;

    if (!descInput || !amountInput || !categoryInput || !dateInput) return;

    const newExpense = {
      id: Date.now(),
      description: descInput,
      amount: parseFloat(amountInput),
      category: categoryInput,
      date: dateInput
    }

    onAddExpense(newExpense);

    setForm({
      descInput: "",
      amountInput: "",
      categoryInput: "",
      dateInput: ""
    });
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">
        Add expenses
      </div>

      <FormField
        label="Description"
        id="input-desc"
        name="descInput"
        type="text"
        value={form.descInput}
        onChange={handleChange}
        placeholder="e.g. Jollibee lunch"
      />

      <FormField
        label="Amount (₱)"
        id="input-amount"
        name="amountInput"
        type="number"
        value={form.amountInput}
        onChange={handleChange}
        placeholder="e.g. 0.00"
      />

      <Select
        label="Category"
        id="input-category"
        name="categoryInput"
        options={categoryOptions}
        value={form.categoryInput}
        onChange={handleChange}
      />

      <FormField
        label="Date"
        id="input-date"
        name="dateInput"
        type="date"
        value={form.dateInput}
        onChange={handleChange}
      />

      <Button label={"+ Add expense"} />
    </form>
  );
}

export default ExpenseForm;
