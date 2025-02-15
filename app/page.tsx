"use client";

import CountVehicleChartTab from "@/components/vehicles/countVehicleChartTab";
import DashboardFilters from "@/components/vehicles/dashboardFilters";
import VolumeVehicleChartTab from "@/components/vehicles/volumeVehicleChartTab";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-gradient-to-t from-base-dark to-base-main p-10 space-y-10 text-white">
      <h1 className="text-5xl font-bold">Vehicle Count Display System</h1>
      <DashboardFilters />
      <div className="flex space-x-10">
        <div className="w-1/2 h-full">
          <VolumeVehicleChartTab />
        </div>
        <div className="w-1/2 h-full">
          <CountVehicleChartTab />
        </div>
      </div>
    </main>
  );
}
