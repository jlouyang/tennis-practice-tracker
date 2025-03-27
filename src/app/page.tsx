import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold">Track Practice Stats</h1>
      <Link href="/track-serves">
        <button className="mt-4 rounded bg-blue-500 text-white p-2">
          Track Serves
        </button>
      </Link>
    </div>
  );
}