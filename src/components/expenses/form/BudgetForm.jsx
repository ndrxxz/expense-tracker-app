import { Button, FormField } from "@/components/ui";
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
        placeholder="e.g. 20000"
      />

      <Button label={"Save budget"} />
    </form>
  );
}

export default BudgetForm;
