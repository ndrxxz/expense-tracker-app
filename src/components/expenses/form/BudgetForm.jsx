import { FormField } from "@/components/ui";
import React from "react";

function BudgetForm() {
  return (
    <form className="flex flex-col gap-3">
      <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">
        Set budget
      </div>

      <FormField
        label="Monthly budget (₱)"
        id="input-budget"
        type="number"
        value=""
        onChange=""
        placeholder="e.g. 20000"
      />

      <button className="w-full bg-zinc-600 hover:bg-zinc-700 text-white text-sm font-semibold rounded-lg py-2.5 cursor-pointer">
        Save budget
      </button>
    </form>
  );
}

export default BudgetForm;
