"use client";

import { useEffect, useRef, RefObject } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import BasePieChart from "../charts/basePieChart";
import useFilterStore from "@/stores/filterStore";
import useVehicleCounts from "@/hooks/useVehicleCounts";
import { io, Socket } from "socket.io-client";

export default function CountVehicleChartTab() {
  const { filters } = useFilterStore();
  const { getVehicleCount, vehicleColor, vehicleType } = useVehicleCounts();
  const socketRef: RefObject<Socket | null> = useRef(null);

  useEffect(() => {
    getVehicleCount();
  }, [filters.period, filters.date, filters.color, filters.type]);

  useEffect(() => {
    const url = process.env.SERVER_URL ?? `http://localhost:3001`;
    socketRef.current = io(url);
    socketRef.current?.on("vehicle_create", () => {
      getVehicleCount();
    });

    return () => {
      socketRef.current?.off("vehicle_create");
    };
  }, []);

  return (
    <Tabs defaultValue="type" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="type">Vehicle Type</TabsTrigger>
        <TabsTrigger value="color">Vehicle Color</TabsTrigger>
      </TabsList>
      <TabsContent value="type">
        <BasePieChart data={vehicleType} />
      </TabsContent>
      <TabsContent value="color">
        <BasePieChart data={vehicleColor} useColorProp={true} />
      </TabsContent>
    </Tabs>
  );
}
