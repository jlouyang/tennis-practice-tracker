'use client'
import { useState } from "react";

export default function TrackServes() {
  const [totalServes, setTotalServes] = useState(0);
  const [makes, setMakes] = useState(0);
  const [missNet, setMissNet] = useState(0);
  const [missWide, setMissWide] = useState(0);
  const [missDeep, setMissDeep] = useState(0);
  const [lastAction, setLastAction] = useState(""); // State for last action

  const handleMake = () => {
    setMakes(makes + 1);
    setTotalServes(totalServes + 1);
    setLastAction("make"); // Record last action
  };

  const handleMissNet = () => {
    setMissNet(missNet + 1);
    setTotalServes(totalServes + 1);
    setLastAction("missNet"); // Record last action
  };

  const handleMissWide = () => {
    setMissWide(missWide + 1);
    setTotalServes(totalServes + 1);
    setLastAction("missWide"); // Record last action
  };

  const handleMissDeep = () => {
    setMissDeep(missDeep + 1);
    setTotalServes(totalServes + 1);
    setLastAction("missDeep"); // Record last action
  };

  const handleUndo = () => {
    if (lastAction === "make") {
      setMakes(makes - 1);
      setTotalServes(totalServes - 1);
    } else if (lastAction === "missNet") {
      setMissNet(missNet - 1);
      setTotalServes(totalServes - 1);
    } else if (lastAction === "missWide") {
      setMissWide(missWide - 1);
      setTotalServes(totalServes - 1);
    } else if (lastAction === "missDeep") {
      setMissDeep(missDeep - 1);
      setTotalServes(totalServes - 1);
    }
    setLastAction(""); // Clear last action
  };

  const servePercentage = totalServes > 0 ? (makes / totalServes) * 100 : 0;
  const missNetPercentage = totalServes > 0 ? (missNet / totalServes) * 100 : 0;
  const missWidePercentage = totalServes > 0 ? (missWide / totalServes) * 100 : 0;
  const missDeepPercentage = totalServes > 0 ? (missDeep / totalServes) * 100 : 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold">Track Your Serves</h1>
      <div className="mt-4">
        <p>Total Serves: {totalServes}</p>
        <p>Makes: {makes}</p>
        <p>Missed in Net: {missNetPercentage.toFixed(2)}%</p>
        <p>Missed Wide: {missWidePercentage.toFixed(2)}%</p>
        <p>Missed Deep: {missDeepPercentage.toFixed(2)}%</p>
        <p>Serve Percentage: {servePercentage.toFixed(2)}%</p>
      </div>
      <div className="mt-4">
        <div className="mb-2 flex justify-center">
          <button onClick={handleMake} className="rounded bg-green-500 text-white p-2 w-40">
            In
          </button>
        </div>
        <button onClick={handleMissNet} className="mr-2 rounded bg-red-500 text-white p-2">
          Net
        </button>
        <button onClick={handleMissWide} className="mr-2 rounded bg-red-500 text-white p-2">
          Wide
        </button>
        <button onClick={handleMissDeep} className="rounded bg-red-500 text-white p-2">
          Deep
        </button>
        <div className="mb-2 flex justify-center">
        <button onClick={handleUndo} className="mt-2 rounded bg-yellow-500 text-white p-2">
          Undo
        </button>
        </div>
      </div>
    </div>
  );
}