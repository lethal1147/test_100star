"use client";

import useFilterStore from "@/stores/filterStore";
import { BaseResponse } from "@/types/utilsType";
import { alertError } from "@/utils/handleError";
import { useState } from "react";

export default function useVehicleCounts() {
  const { filters } = useFilterStore();
  const [vehicleType, setVehicleType] = useState<Record<string, number>>({});
  const [vehicleColor, setVehicleColor] = useState<Record<string, number>>({});

  const getVehicleCount = async () => {
    try {
      const data: BaseResponse<{
        vehicleType: Record<string, number>;
        vehicleColor: Record<string, number>;
      }> = await fetch(
        "/api/vehicle/getTotal?" +
          new URLSearchParams({
            period: filters.period,
            date: filters.date?.toISOString(),
            color: filters.color,
            type: filters.type,
          })
      ).then((res) => res.json());
      if (!data || !data.data) throw new Error("Failed to get data.");

      setVehicleType(data.data.vehicleType);
      setVehicleColor(data.data.vehicleColor);
    } catch (err) {
      alertError(err);
    }
  };
  return {
    getVehicleCount,
    vehicleColor,
    vehicleType,
  };
}
