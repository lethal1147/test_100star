"use client";

import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  Title,
} from "chart.js";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { colorNameToHex } from "@/utils/utils";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const options: ChartOptions<"pie"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "right" as const },
    title: {
      display: false,
      text: "Chart.js Pie Chart",
    },
  },
  //   elements: {
  //     arc: { borderWidth: 1, borderColor: "#000000" },
  //   },
};

const MOCK_VEHICLE_COLORS_DATA = [
  { label: "White", value: 30 },
  { label: "Black", value: 20 },
  { label: "Red", value: 15 },
  { label: "Green", value: 15 },
  { label: "Silver", value: 10 },
  { label: "Others", value: 10 },
];

export default function VehicleColorPieChart() {
  const data = useMemo<ChartData<"pie">>(() => {
    return {
      labels: MOCK_VEHICLE_COLORS_DATA.map((item) => item.label),
      datasets: [
        {
          data: MOCK_VEHICLE_COLORS_DATA.map((item) => item.value),
          backgroundColor: MOCK_VEHICLE_COLORS_DATA.map((item) =>
            colorNameToHex(item.label)
          ),
          borderWidth: 0,
        },
      ],
    };
  }, []);
  return (
    <Card className="h-full ">
      <CardHeader className="pb-0">
        <CardTitle className="font-bold text-xl">สียานพาหนะ</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <div className="w-full max-w-[300px] h-[200px] p-3">
          <Pie options={options} data={data} />
        </div>
      </CardContent>
    </Card>
  );
}
