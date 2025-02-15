import { create } from "zustand";
import { CountPeriod } from "@/types/vehicleType";

export type FilterType = {
  date: Date;
  color: string;
  type: string;
  period: CountPeriod;
};

interface FilterStore {
  filters: FilterType;
  changeFilter: (
    val: string | Date | CountPeriod,
    name: keyof FilterType
  ) => void;
}

const useFilterStore = create<FilterStore>()((set, get) => ({
  filters: {
    date: new Date(),
    color: "all",
    type: "all",
    period: "day",
  },
  changeFilter: (val, name) => {
    set({ filters: { ...get().filters, [name]: val } });
  },
}));

export default useFilterStore;
