"use client";

import { BaseResponse } from "@/types/utilsType";
import { alertError } from "@/utils/handleError";
import { useState } from "react";

export default function useVehicleDropdown() {
  const [dropdowns, setDropdowns] = useState<{
    vehicleColors: string[];
    vehicleTypes: string[];
  }>({
    vehicleColors: [],
    vehicleTypes: [],
  });

  const getMaster = async () => {
    try {
      const data: BaseResponse<{
        vehicleColors: string[];
        vehicleTypes: string[];
      }> = await fetch("/api/master/getVehiclesDropdowns").then((res) =>
        res.json()
      );
      if (!data || !data.data) throw new Error("Failed to get data.");
      setDropdowns({
        vehicleColors: data.data.vehicleColors,
        vehicleTypes: data.data.vehicleTypes,
      });
    } catch (err) {
      alertError(err);
    }
  };

  return {
    dropdowns,
    getMaster,
  };
}
