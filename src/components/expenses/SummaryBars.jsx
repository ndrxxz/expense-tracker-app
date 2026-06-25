import React from "react";
import { SummaryBar } from "@/components/ui";

function SummaryBars({ budget, spent, remaining }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      <SummaryBar label={"Monthly budget"} amount={budget} />

      <SummaryBar label={"Total spent"} amount={0} />

      <SummaryBar label={"Remaining"} amount={0} />
    </div>
  );
}

export default SummaryBars;
