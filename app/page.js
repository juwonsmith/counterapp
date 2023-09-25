"use client";
import { useCountStore } from "./store/zustand";
import useStore from "./store/useStore";

export default function Home() {
  const increaseCount = useCountStore((state) => state.increaseCount);
  const decreaseCount = useCountStore((state) => state.decreaseCount);
  const count = useStore(useCountStore, (state) => state.count);

  return (
    <main className="w-full h-screen bg-slate-800 text-white">
      <h1 className="text-center text-4xl">Simple Counter</h1>
      <span className="text-center mt-3 block">Result: {count}</span>
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          className="w-max h-max p-2 bg-green-400 rounded-md font-mono
         hover:bg-green-600 transition-colors duration-300"
          onClick={increaseCount}
        >
          Add(10)
        </button>
        <button
          className="w-max h-max p-2 bg-green-400 rounded-md font-mono
         hover:bg-green-600 transition-colors duration-300"
          onClick={decreaseCount}
        >
          Remove(10)
        </button>
      </div>
    </main>
  );
}
