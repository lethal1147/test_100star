"use client";

import React, { useEffect } from "react";
import { DatePicker } from "@/components/inputs/datePicker";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useVehicleDropdown from "@/hooks/useVehicleDropdown";
import useFilterStore from "@/stores/filterStore";
import BaseSelector from "../inputs/baseSelector";

export default function DashboardFilters() {
  const { filters, changeFilter } = useFilterStore();
  const { dropdowns, getMaster } = useVehicleDropdown();

  useEffect(() => {
    getMaster();
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-5">
      <DatePicker
        date={filters.date}
        setDate={(val) => changeFilter(val as Date, "date")}
      />
      <BaseSelector
        value={filters.color}
        onChange={(val) => changeFilter(val, "color")}
        label="Vehicle's colors"
        options={dropdowns.vehicleColors}
      />
      <BaseSelector
        value={filters.type}
        onChange={(val) => changeFilter(val, "type")}
        label="Vehicle's types"
        options={dropdowns.vehicleTypes}
      />
      <Select
        value={filters.period}
        onValueChange={(val) => changeFilter(val, "period")}
      >
        <SelectTrigger className="w-[180px] bg-white text-black">
          <SelectValue placeholder="Period" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Period</SelectLabel>
            <SelectItem value="pastHour">Past hour</SelectItem>
            <SelectItem value="day">Day</SelectItem>
            <SelectItem value="week">Week</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
