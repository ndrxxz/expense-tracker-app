import React from "react";

function Hero() {
  return (
    <div className="flex flex-col items-center gap-1 px-4 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        Track. Save. Grow.
      </h1>
      <p className="text-base sm:text-lg text-zinc-400">
        A smarter way to manage your expenses, build better habits, and reach
        your financial goals faster.
      </p>
    </div>
  );
}

export default Hero;
