import { Button, FormField } from "@/components/ui";
import React, { useState } from "react";

function BudgetForm({ onSetBudget }) {
  const [budgetInput, setBudgetInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!budgetInput) return;

    onSetBudget(parseFloat(budgetInput));
    setBudgetInput("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">
        Set budget
      </div>

      <FormField
        label="Monthly budget (₱)"
        id="input-budget"
        type="number"
        value={budgetInput}
        onChange={(e) => setBudgetInput(e.target.value)}
        placeholder="e.g. 20000"
      />

      <Button label={"Save budget"} />
    </form>
  );
}

export default BudgetForm;
