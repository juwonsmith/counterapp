import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCountStore = create(
  persist(
    (set) => ({
      count: 0,
      increaseCount: () => set((state) => ({ count: state.count + 10 })),
      decreaseCount: () => set((state) => ({ count: state.count - 10 })),
    }),
    {
      name: "counterstore", // name of the item in the storage (must be unique)
    }
  )
);
