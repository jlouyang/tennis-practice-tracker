'use client'
import { useState } from "react";

export default function TrackServes() {
  const [totalServes, setTotalServes] = useState(0);
  const [makes, setMakes] = useState(0);
  const [missNet, setMissNet] = useState(0);
  const [missWide, setMissWide] = useState(0);
  const [missDeep, setMissDeep] = useState(0);
  const [lastAction, setLastAction] = useState(""); // State for last action
// New state variables for each type of serve
const [makesT, setMakesT] = useState(0);
const [makesBodyFH, setMakesBodyFH] = useState(0);
const [makesBodyBH, setMakesBodyBH] = useState(0);
const [makesWide, setMakesWide] = useState(0);

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

  const handleMakeT = () => {
    setMakesT(makesT + 1);
    setMakes(makes + 1);
    setTotalServes(totalServes + 1);
    setLastAction("makeT");
  };

  const handleMakeBodyFH = () => {
    setMakesBodyFH(makesBodyFH + 1);
    setMakes(makes + 1);
    setTotalServes(totalServes + 1);
    setLastAction("makeBodyFH");
  };

  const handleMakeBodyBH = () => {
    setMakesBodyBH(makesBodyBH + 1);
    setMakes(makes + 1);
    setTotalServes(totalServes + 1);
    setLastAction("makeBodyBH");
  };

  const handleMakeWide = () => {
    setMakesWide(makesWide + 1);
    setMakes(makes + 1);
    setTotalServes(totalServes + 1);
    setLastAction("makeWide");
  };

  const handleUndo = () => {
   // Undo logic for makes
   if (lastAction === "makeT") {
    setMakesT(makesT - 1);
    setMakes(makes - 1);
    setTotalServes(totalServes - 1);
  } else if (lastAction === "makeBodyFH") {
    setMakesBodyFH(makesBodyFH - 1);
    setMakes(makes - 1);
    setTotalServes(totalServes - 1);
  } else if (lastAction === "makeBodyBH") {
    setMakesBodyBH(makesBodyBH - 1);
    setMakes(makes - 1);
    setTotalServes(totalServes - 1);
  } else if (lastAction === "makeWide") {
    setMakesWide(makesWide - 1);
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
  const handleClear = () => {
    setMakes(0);
    setTotalServes(0);
    setMissNet(0);
    setMissWide(0);
    setMissDeep(0);
    setMakesT(0);
    setMakesBodyFH(0);
    setMakesBodyBH(0);
    setMakesWide(0);
    setLastAction(""); // Clear last action
  };

  const servePercentage = totalServes > 0 ? (makes / totalServes) * 100 : 0;
  const missNetPercentage = totalServes > 0 ? (missNet / totalServes) * 100 : 0;
  const missWidePercentage = totalServes > 0 ? (missWide / totalServes) * 100 : 0;
  const missDeepPercentage = totalServes > 0 ? (missDeep / totalServes) * 100 : 0;
  const tPercentage = totalServes > 0 ? (makesT / totalServes) * 100 : 0;
  const bodyFHPercentage = totalServes > 0 ? (makesBodyFH / totalServes) * 100 : 0;
  const bodyBHPercentage = totalServes > 0 ? (makesBodyBH / totalServes) * 100 : 0;
  const widePercentage = totalServes > 0 ? (makesWide / totalServes) * 100 : 0;


  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold">Track Your Serves</h1>
      <div className="mt-4">
      <p>Total Serves: {totalServes}</p>
      <div className="mt-4">
  <table className="min-w-full border-collapse border border-gray-200">
    <thead>
      <tr>
        <th className="border border-gray-300 p-2">Description</th>
        <th className="border border-gray-300 p-2">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 p-2">Total Serves</td>
        <td className="border border-gray-300 p-2">{totalServes}</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Makes</td>
        <td className="border border-gray-300 p-2">{makes}</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Serve Percentage</td>
        <td className="border border-gray-300 p-2">{servePercentage.toFixed(2)}%</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">T Percentage</td>
        <td className="border border-gray-300 p-2">{tPercentage.toFixed(2)}%</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Body FH Percentage</td>
        <td className="border border-gray-300 p-2">{bodyFHPercentage.toFixed(2)}%</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Body BH Percentage</td>
        <td className="border border-gray-300 p-2">{bodyBHPercentage.toFixed(2)}%</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Wide Percentage</td>
        <td className="border border-gray-300 p-2">{widePercentage.toFixed(2)}%</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Missed in Net</td>
        <td className="border border-gray-300 p-2">{missNetPercentage.toFixed(2)}%</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Missed Wide</td>
        <td className="border border-gray-300 p-2">{missWidePercentage.toFixed(2)}%</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Missed Deep</td>
        <td className="border border-gray-300 p-2">{missDeepPercentage.toFixed(2)}%</td>
      </tr>
    </tbody>
  </table>
</div>
      </div>
      <div className="mt-4 flex flex-col items-center">
  <div className="mb-2 flex justify-center space-x-2">
    <button onClick={handleMakeT} className="rounded bg-green-500 text-white p-2 w-40">
      T
    </button>
    <button onClick={handleMakeBodyFH} className="rounded bg-green-500 text-white p-2 w-40">
      Body FH
    </button>
    <button onClick={handleMakeBodyBH} className="rounded bg-green-500 text-white p-2 w-40">
      Body BH
    </button>
    <button onClick={handleMakeWide} className="rounded bg-green-500 text-white p-2 w-40">
      Wide
    </button>
  </div>
  <div className="mb-2 flex justify-center space-x-2">
    <button onClick={handleMissNet} className="rounded bg-red-500 text-white p-2 w-40">
      Miss Net
    </button>
    <button onClick={handleMissWide} className="rounded bg-red-500 text-white p-2 w-40">
      Miss Wide
    </button>
    <button onClick={handleMissDeep} className="rounded bg-red-500 text-white p-2 w-40">
      Miss Deep
    </button>
  </div>
  <div className="mb-2 flex justify-center space-x-2">
    <button onClick={handleUndo} className="mt-2 rounded bg-yellow-500 text-white p-2 w-40">
      Undo
    </button>
    <button onClick={handleClear} className="mt-2 rounded bg-gray-500 text-white p-2 w-40">
      Clear
    </button>
  </div>
</div>
    </div>
  );
}