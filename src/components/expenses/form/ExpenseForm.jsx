import { FormField } from "@/components/ui";
import React from "react";

function ExpenseForm() {
  return (
    <form className="flex flex-col gap-3">
      <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">
        Add expenses
      </div>

      <FormField
        label="Description"
        id="input-desc"
        type="text"
        value=""
        onChange=""
        placeholder="e.g. Jollibee lunch"
      />

      <FormField
        label="Amount (₱)"
        id="input-amount"
        type="number"
        value=""
        onChange=""
        placeholder="e.g. 0.00"
      />

      <div className="flex flex-col gap-2">
        <label htmlFor="input-category" className="text-xs">
          Category
        </label>
        <select
          defaultValue=""
          id="input-category"
          className="w-full text-sm text-white border border-white/10 bg-zinc-900 rounded-md px-2.5 py-2 outline-none focus:border-zinc-500"
        >
          <option value="" disabled className="bg-zinc-900 text-white">
            Choose option
          </option>
          <option value="Food" className="bg-zinc-900 text-white">
            🍔 Food
          </option>
          <option value="Transport" className="bg-zinc-900 text-white">
            🚌 Transport
          </option>
          <option value="Bills" className="bg-zinc-900 text-white">
            ⚡ Bills
          </option>
          <option value="Shopping" className="bg-zinc-900 text-white">
            🛍️ Shopping
          </option>
          <option value="Other" className="bg-zinc-900 text-white">
            📦 Other
          </option>
        </select>
      </div>

      <FormField
        label="Date"
        id="input-date"
        type="date"
        value=""
        onChange=""
      />

      <button className="w-full bg-zinc-600 hover:bg-zinc-700 text-white text-sm font-semibold rounded-lg py-2.5 cursor-pointer">
        + Add expense
      </button>
    </form>
  );
}

export default ExpenseForm;
