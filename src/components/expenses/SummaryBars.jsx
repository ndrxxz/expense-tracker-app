import React from "react";
import { SummaryBar } from "@/components/ui";

function SummaryBars({ budget, spent, remaining }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      <SummaryBar label={"Monthly budget"} amount={budget} />

      <SummaryBar label={"Total spent"} amount={spent} />

      <SummaryBar label={"Remaining"} amount={remaining} />
    </div>
  );
}

export default SummaryBars;
