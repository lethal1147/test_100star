"use client";

import CountVehicleChartTab from "@/components/vehicles/countVehicleChartTab";
import DashboardFilters from "@/components/vehicles/dashboardFilters";
import VolumeVehicleChartTab from "@/components/vehicles/volumeVehicleChartTab";

export default function Home() {
  return (
    <main className="min-h-screen w-screen overflow-hidden bg-gradient-to-t from-base-dark to-base-main p-5 sm:p-10 space-y-10 text-white">
      <h1 className="text-3xl lg:text-5xl font-bold">
        Vehicle Count Display System
      </h1>
      <DashboardFilters />
      <div className="flex space-y-5 lg:space-y-0 lg:space-x-10 flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-full">
          <VolumeVehicleChartTab />
        </div>
        <div className="w-full lg:w-1/2 h-full">
          <CountVehicleChartTab />
        </div>
      </div>
    </main>
  );
}
