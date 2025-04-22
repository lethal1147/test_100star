"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "รถมอเตอร์ไซค์",
    "รถบรรทุก",
    "รถเมย์",
    "รถแท็กซี่",
    "รถตู้",
    "รถเก๋ง",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [19, 25, 5, 15, 14, 24],
      backgroundColor: "rgba(151, 215, 240, 0.8)",
      borderColor: "rgba(175, 222, 240, 1)",
      borderWidth: 1,
    },
  ],
};

const options: ChartOptions<"radar"> = {
  responsive: true,
  scales: {
    r: {
      angleLines: {
        color: "#000000",
        lineWidth: 1,
      },
      grid: {
        color: "#000000",
        lineWidth: 1,
      },
      pointLabels: {
        color: "#4a5568",
        font: {
          size: 14,
        },
      },
      ticks: {
        font: {
          size: 12,
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function VehiclesTypeChart() {
  return (
    <Card className="font-bold">
      <CardHeader>
        <CardTitle>ประเภท ยานพาหนะ</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="max-h-[400px] flex justify-center">
          <Radar data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  );
}
