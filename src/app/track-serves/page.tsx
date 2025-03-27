'use client'
import { useState } from "react";

export default function TrackServes() {
  const [totalServes, setTotalServes] = useState(0);
  const [makes, setMakes] = useState(0);
  const [misses, setMisses] = useState(0);

  const handleMake = () => {
    setMakes(makes + 1);
    setTotalServes(totalServes + 1);
  };

  const handleMiss = () => {
    setMisses(misses + 1);
    setTotalServes(totalServes + 1);
  };

  const servePercentage = totalServes > 0 ? (makes / totalServes) * 100 : 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold">Track Your Serves</h1>
      <div className="mt-4">
        <p>Total Serves: {totalServes}</p>
        <p>Makes: {makes}</p>
        <p>Misses: {misses}</p>
        <p>Serve Percentage: {servePercentage.toFixed(2)}%</p>
      </div>
      <div className="mt-4">
        <button onClick={handleMake} className="mr-2 rounded bg-green-500 text-white p-2">
          Make
        </button>
        <button onClick={handleMiss} className="rounded bg-red-500 text-white p-2">
          Miss
        </button>
      </div>
    </div>
  );
}