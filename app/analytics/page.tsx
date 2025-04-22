import HeatMap from "@/components/charts/heatMap";
import VehicleColorPieChart from "@/components/charts/vehicleColorPieChart";
import WeeklyBarChart from "@/components/charts/weeklyBarChart";
import DecelerationRateList from "@/components/vehicles/decelerationRateList";
import InterestDataList from "@/components/vehicles/interestDataList";
import VehiclesTypeChart from "@/components/vehicles/vehiclesTypeChart";
import VolumeVehicleTimeChart from "@/components/vehicles/volumeVehicleTimeChart";
import React from "react";

export default function AnalyticsPage() {
  return (
    <div className="grid grid-cols-9 grid-rows-7 gap-5 h-screen p-8">
      {/* Row 1–2 */}
      <div className="bg-blue-300 col-span-6 row-span-3"></div>
      <div className="col-span-3 row-span-3">
        <HeatMap />
      </div>

      {/* Row 3 */}
      <div className="col-span-2 row-span-2">
        <InterestDataList />
      </div>
      <div className="col-span-2 row-span-2">
        <VehicleColorPieChart />
      </div>
      <div className="col-span-2 row-span-2">
        <WeeklyBarChart />
      </div>
      <div className="col-span-3 row-span-4">
        <VehiclesTypeChart />
      </div>

      {/* Row 4 */}
      <div className="col-span-4 row-span-2">
        <DecelerationRateList />
      </div>
      <div className="col-span-2 row-span-2">
        <VolumeVehicleTimeChart />
      </div>
      {/* The last column is already filled from above */}
    </div>
  );
}
