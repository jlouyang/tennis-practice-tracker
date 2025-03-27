'use client'
import { useState } from "react";

interface TableProps {
  serves: string[];
}

export default function TrackServes() {
  const [totalServes, setTotalServes] = useState(0);
  const [makes, setMakes] = useState(0);
  const [missNet, setMissNet] = useState(0);
  const [missWide, setMissWide] = useState(0);
  const [missDeep, setMissDeep] = useState(0);
  const [lastAction, setLastAction] = useState(""); // State for last action
  const [deuceServes, setDeuceServes] = useState<string[]>([]);
  const [adServes, setAdServes] = useState<string[]>([]);
  const [currentSide, setCurrentSide] = useState('deuce'); // State for current side
// New state variables for each type of serve
const [makesT, setMakesT] = useState(0);
const [makesBodyFH, setMakesBodyFH] = useState(0);
const [makesBodyBH, setMakesBodyBH] = useState(0);
const [makesWide, setMakesWide] = useState(0);

  const handleMake = () => {
    setMakes(makes + 1);
    setTotalServes(totalServes + 1);
    setLastAction("make"); // Record last action
    if (currentSide === 'deuce') {
      setDeuceServes([...deuceServes, 'make']);
    } else {
      setAdServes([...adServes, 'make']);
    }
  };

  const handleMissNet = () => {
    setMissNet(missNet + 1);
    setTotalServes(totalServes + 1);
    setLastAction("missNet"); // Record last action
    if (currentSide === 'deuce') {
      setDeuceServes([...deuceServes, 'missNet']);
    } else {
      setAdServes([...adServes, 'missNet']);
    }
  };

  const handleMissWide = () => {
    setMissWide(missWide + 1);
    setTotalServes(totalServes + 1);
    setLastAction("missWide"); // Record last action
    if (currentSide === 'deuce') {
      setDeuceServes([...deuceServes, 'missWide']);
    } else {
      setAdServes([...adServes, 'missWide']);
    }
  };

  const handleMissDeep = () => {
    setMissDeep(missDeep + 1);
    setTotalServes(totalServes + 1);
    setLastAction("missDeep"); // Record last action
    if (currentSide === 'deuce') {
      setDeuceServes([...deuceServes, 'missDeep']);
    } else {
      setAdServes([...adServes, 'missDeep']);
    }
  };

  const handleMakeT = () => {
    setMakesT(makesT + 1);
    setMakes(makes + 1);
    setTotalServes(totalServes + 1);
    setLastAction("makeT");
    if (currentSide === 'deuce') {
      setDeuceServes([...deuceServes, 'makeT']);
      setDeuceServes([...deuceServes,'make'])
    } else {
      setAdServes([...adServes, 'makeT']);
      setAdServes([...adServes,'make'])
    }
  };

  const handleMakeBodyFH = () => {
    setMakesBodyFH(makesBodyFH + 1);
    setMakes(makes + 1);
    setTotalServes(totalServes + 1);
    setLastAction("makeBodyFH");
    if (currentSide === 'deuce') {
      setDeuceServes([...deuceServes, 'makeBodyFH']);
      setDeuceServes([...deuceServes,'make'])
    } else {
      setAdServes([...adServes, 'makeBodyFH']);
      setAdServes([...adServes,'make'])
    }
  };

  const handleMakeBodyBH = () => {
    setMakesBodyBH(makesBodyBH + 1);
    setMakes(makes + 1);
    setTotalServes(totalServes + 1);
    setLastAction("makeBodyBH");
    if (currentSide === 'deuce') {
      setDeuceServes([...deuceServes, 'makeBodyBH']);
      setDeuceServes([...deuceServes,'make'])
    } else {
      setAdServes([...adServes, 'makeBodyBH']);
      setAdServes([...adServes,'make'])
    }
  };

  const handleMakeWide = () => {
    setMakesWide(makesWide + 1);
    setMakes(makes + 1);
    setTotalServes(totalServes + 1);
    setLastAction("makeWide");
    if (currentSide === 'deuce') {
      setDeuceServes([...deuceServes, 'makeWide']);
      setDeuceServes([...deuceServes,'make'])
    } else {
      setAdServes([...adServes, 'makeWide']);
      setAdServes([...adServes,'make'])
    }
  };

  const handleUndo = () => {
   // Undo logic for makes
   if (lastAction === "makeT") {
    setMakesT(makesT - 1);
    setMakes(makes - 1);
    setTotalServes(totalServes - 1);
    if (currentSide === 'deuce') {
      setDeuceServes(deuceServes.slice(0, -1));
    } else {
      setAdServes(adServes.slice(0, -1));
    }
  } else if (lastAction === "makeBodyFH") {
    setMakesBodyFH(makesBodyFH - 1);
    setMakes(makes - 1);
    setTotalServes(totalServes - 1);
    if (currentSide === 'deuce') {
      setDeuceServes(deuceServes.slice(0, -1));
    } else {
      setAdServes(adServes.slice(0, -1));
    }
  } else if (lastAction === "makeBodyBH") {
    setMakesBodyBH(makesBodyBH - 1);
    setMakes(makes - 1);
    setTotalServes(totalServes - 1);
    if (currentSide === 'deuce') {
      setDeuceServes(deuceServes.slice(0, -1));
    } else {
      setAdServes(adServes.slice(0, -1));
    }
  } else if (lastAction === "makeWide") {
    setMakesWide(makesWide - 1);
    setMakes(makes - 1);
    setTotalServes(totalServes - 1);
    if (currentSide === 'deuce') {
      setDeuceServes(deuceServes.slice(0, -1));
    } else {
      setAdServes(adServes.slice(0, -1));
    }
  } else if (lastAction === "missNet") {
      setMissNet(missNet - 1);
      setTotalServes(totalServes - 1);
      if (currentSide === 'deuce') {
        setDeuceServes(deuceServes.slice(0, -1));
      } else {
        setAdServes(adServes.slice(0, -1));
      }
    } else if (lastAction === "missWide") {
      setMissWide(missWide - 1);
      setTotalServes(totalServes - 1);
      if (currentSide === 'deuce') {
        setDeuceServes(deuceServes.slice(0, -1));
      } else {
        setAdServes(adServes.slice(0, -1));
      }
    } else if (lastAction === "missDeep") {
      setMissDeep(missDeep - 1);
      setTotalServes(totalServes - 1);
      if (currentSide === 'deuce') {
        setDeuceServes(deuceServes.slice(0, -1));
      } else {
        setAdServes(adServes.slice(0, -1));
      }
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
    setDeuceServes([]);
    setAdServes([]);
    setLastAction(""); // Clear last action
  };
  const DeuceTable: React.FC<TableProps> = ({ serves }) => {
    return (
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
            <td className="border border-gray-300 p-2">{serves.length}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Makes</td>
            <td className="border border-gray-300 p-2">{serves.filter(serve => serve === 'make').length}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Serve Percentage</td>
            <td className="border border-gray-300 p-2">{serves.length > 0 ? ((serves.filter(serve => serve === 'make').length / serves.length) * 100).toFixed(2) : '0'}%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">T Percentage</td>
            <td className="border border-gray-300 p-2">{serves.length > 0 ? ((serves.filter(serve => serve === 'makeT').length / serves.length) * 100).toFixed(2) : '0'}%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Body FH Percentage</td>
            <td className="border border-gray-300 p-2">{serves.length > 0 ? ((serves.filter(serve => serve === 'makeBodyFH').length / serves.length) * 100).toFixed(2) : '0'}%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Body BH Percentage</td>
            <td className="border border-gray-300 p-2">{serves.length > 0 ? ((serves.filter(serve => serve === 'makeBodyBH').length / serves.length) * 100).toFixed(2) : '0'}%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Wide Percentage</td>
            <td className="border border-gray-300 p-2">{serves.length > 0 ? ((serves.filter(serve => serve === 'makeWide').length / serves.length) * 100).toFixed(2) : '0'}%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Missed in Net</td>
            <td className="border border-gray-300 p-2">{serves.length > 0 ? ((serves.filter(serve => serve === 'missNet').length / serves.length) * 100).toFixed(2) : '0'}%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Missed Wide</td>
            <td className="border border-gray-300 p-2">{serves.length > 0 ? ((serves.filter(serve => serve === 'missWide').length / serves.length) * 100).toFixed(2) : '0'}%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Missed Deep</td>
            <td className="border border-gray-300 p-2">{serves.length > 0 ? ((serves.filter(serve => serve === 'missDeep').length / serves.length) * 100).toFixed(2) : '0'}%</td>
          </tr>
        </tbody>
      </table>
    );
  };

  const AdTable: React.FC<TableProps> = ({ serves }) => {
    return (
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
            <td className="border border-gray-300 p-2">{serves.length}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Makes</td>
            <td className="border border-gray-300 p-2">{serves.filter(serve => serve === 'make').length}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Serve Percentage</td>
            <td className="border border-gray-300 p-2">{serves.length > 0 ? ((serves.filter(serve => serve === 'make').length / serves.length) * 100).toFixed(2) : '0'}%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">T Percentage</td>
            <td className="border border-gray-300 p-2">{serves.length > 0 ? ((serves.filter(serve => serve === 'makeT').length / serves.length) * 100).toFixed(2) : '0'}%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Body FH Percentage</td>
            <td className="border border-gray-300 p-2">{serves.length > 0 ? ((serves.filter(serve => serve === 'makeBodyFH').length / serves.length) * 100).toFixed(2) : '0'}%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Body BH Percentage</td>
            <td className="border border-gray-300 p-2">{serves.length > 0 ? ((serves.filter(serve => serve === 'makeBodyBH').length / serves.length) * 100).toFixed(2) : '0'}%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Wide Percentage</td>
            <td className="border border-gray-300 p-2">{serves.length > 0 ? ((serves.filter(serve => serve === 'makeWide').length / serves.length) * 100).toFixed(2) : '0'}%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Missed in Net</td>
            <td className="border border-gray-300 p-2">{serves.length > 0 ? ((serves.filter(serve => serve === 'missNet').length / serves.length) * 100).toFixed(2) : '0'}%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Missed Wide</td>
            <td className="border border-gray-300 p-2">{serves.length > 0 ? ((serves.filter(serve => serve === 'missWide').length / serves.length) * 100).toFixed(2) : '0'}%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Missed Deep</td>
            <td className="border border-gray-300 p-2">{serves.length > 0 ? ((serves.filter(serve => serve === 'missDeep').length / serves.length) * 100).toFixed(2) : '0'}%</td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold">Track Your Serves</h1>
      <div className="mt-4">
      <p>Total Serves: {totalServes}</p>
      <div className="mt-4">
        {currentSide === 'deuce' ? <DeuceTable serves={deuceServes} /> : <AdTable serves={adServes} />}
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
    <button onClick={() => setCurrentSide('deuce')} className="mt-2 rounded bg-blue-500 text-white p-2 w-40">
      Deuce
    </button>
    <button onClick={() => setCurrentSide('ad')} className="mt-2 rounded bg-blue-500 text-white p-2 w-40">
      Ad
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