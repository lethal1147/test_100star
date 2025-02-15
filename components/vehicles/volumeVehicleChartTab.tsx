"use client";

import { ReactNode, useEffect, RefObject, useRef } from "react";
import DailyChart from "../charts/dailyChart";
import WeeklyChart from "../charts/weeklyChart";
import useVehicleVolumes from "@/hooks/useVehicleVolumes";
import useFilterStore from "@/stores/filterStore";
import { CountPeriod } from "@/types/vehicleType";
import { io, Socket } from "socket.io-client";

const CHART_MAPPER: Record<CountPeriod, (data: number[]) => ReactNode> = {
  pastHour: (dailyData) => DailyChart({ dailyData }),
  day: (dailyData) => DailyChart({ dailyData }),
  week: (weeklyData) => WeeklyChart({ weeklyData }),
};

const VolumeVehicleChartTab = () => {
  const { filters } = useFilterStore();
  const { getVehicleVolumes, dataVolumes } = useVehicleVolumes();
  const socketRef: RefObject<Socket | null> = useRef(null);

  useEffect(() => {
    getVehicleVolumes();
  }, [filters.date, filters.period, filters.color, filters.type]);

  useEffect(() => {
    const url = process.env.SERVER_URL ?? `http://localhost:3001`;
    socketRef.current = io(url);
    socketRef.current?.on("vehicle_create", () => {
      getVehicleVolumes();
    });

    return () => {
      socketRef.current?.off("vehicle_create");
    };
  }, []);

  if (!CHART_MAPPER[filters.period]) return null;

  return CHART_MAPPER[filters.period](dataVolumes);
};

export default VolumeVehicleChartTab;
