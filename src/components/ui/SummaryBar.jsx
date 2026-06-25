import React from "react";

function SummaryBar({ label, amount }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
      <div className="text-sm text-zinc-500">{label}</div>
      <div className="text-xl font-semibold">₱{amount}</div>
    </div>
  );
}

export default SummaryBar;
