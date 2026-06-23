import React from "react";

function SummaryBar() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
        <div className="text-xs text-zinc-500">Monthly budget</div>
        <div className="text-xl font-semibold">₱0</div>
      </div>
      <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
        <div className="text-xs text-zinc-500">Total spent</div>
        <div className="text-xl font-semibold">₱0</div>
      </div>
      <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1">
        <div className="text-xs text-zinc-500">Remaining</div>
        <div className="text-xl font-semibold">₱0</div>
      </div>
    </div>
  );
}

export default SummaryBar;
