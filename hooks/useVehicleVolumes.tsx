"use client";

import useFilterStore from "@/stores/filterStore";
import { BaseResponse } from "@/types/utilsType";
import { alertError } from "@/utils/handleError";
import { useState } from "react";

export default function useVehicleVolumes() {
  const { filters } = useFilterStore();
  const [dataVolumes, setDataVolumes] = useState<number[]>([]);

  const getVehicleVolumes = async () => {
    try {
      const data: BaseResponse<number[]> = await fetch(
        "/api/vehicle/getVolumes?" +
          new URLSearchParams({
            date: filters.date?.toISOString(),
            period: filters.period,
            color: filters.color,
            type: filters.type,
          })
      ).then((res) => res.json());
      if (!data || !data.data) throw new Error("Failed to get data.");
      setDataVolumes(data.data);
    } catch (err) {
      alertError(err);
    }
  };

  return {
    getVehicleVolumes,
    dataVolumes,
  };
}
