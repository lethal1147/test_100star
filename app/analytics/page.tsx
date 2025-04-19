import HeatMap from "@/components/charts/heatMap";
import VehicleColorPieChart from "@/components/charts/vehicleColorPieChart";
import InterestDataList from "@/components/vehicles/interestDataList";
import React from "react";

export default function AnalyticsPage() {
  return (
    <div className="grid grid-cols-9 grid-rows-7 gap-2 h-screen p-4">
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
      <div className="bg-green-500 col-span-2 row-span-2"></div>
      <div className="bg-green-600 col-span-3 row-span-4"></div>

      {/* Row 4 */}
      <div className="bg-yellow-300 col-span-4 row-span-2"></div>
      <div className="bg-yellow-400 col-span-2 row-span-2"></div>
      {/* The last column is already filled from above */}
    </div>
  );
}
