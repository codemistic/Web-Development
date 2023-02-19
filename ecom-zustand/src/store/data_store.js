import { create } from "zustand";
import { persist } from "zustand/middleware";
const data_store = (set) => ({
  data: [],

  setData: (d) => {
    set((state) => ({
      data: d,
    }));
  },
  resetData: () => {
    set((set) => ({
      data: [],
    }));
  },
});

const useDataStore = create(
  persist(data_store, {
    name: "ecommerce",
  })
);

export default useDataStore;
