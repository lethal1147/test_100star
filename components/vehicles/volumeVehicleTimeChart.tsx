"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ChartOptions,
  Title,
  CategoryScale,
  LinearScale,
  BarElement,
  Plugin,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const value = context.raw || 0;
          return `Volume: ${value.toLocaleString()}`;
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#4a5568",
        font: {
          size: 10,
        },
      },
    },
    y: {
      grid: {
        color: "#e2e8f0",
      },
      ticks: {
        color: "#4a5568",
        font: {
          size: 10,
        },
        callback: (value) => {
          if (value === 0) return "0";
          if (value === 2200) return "2200";
          if (value === 3200) return "3200";
          return "";
        },
      },
      suggestedMin: 0,
      suggestedMax: 3500,
    },
  },
};

export default function VolumeVehicleTimeChart() {
  const hours = [
    "6:00",
    "8:00",
    "10:00",
    "12:00",
    "14:00",
    "16:00",
    "18:00",
    "20:00",
    "22:00",
  ];
  const randomData = hours.map(() => Math.floor(Math.random() * 3000) + 500);

  // Set peak hour
  randomData[6] = 3200; // Peak at 18:00

  const data = {
    labels: hours,
    datasets: [
      {
        label: "Traffic Volume",
        data: randomData,
        backgroundColor: "#4fd1c5",
        borderColor: "#4fd1c5",
        borderWidth: 1,
        borderRadius: 0,
        barPercentage: 0.1, // Make bars very thin
        categoryPercentage: 0.8,
      },
    ],
  };

  const circlePlugin = {
    id: "circlePlugin",
    afterDatasetsDraw: (chart) => {
      const { ctx } = chart;
      chart.data.datasets.forEach((dataset: any, datasetIndex: number) => {
        const meta = chart.getDatasetMeta(datasetIndex);
        if (!meta.hidden) {
          meta.data.forEach((element: any) => {
            // Draw circle on top of each bar
            ctx.beginPath();
            ctx.arc(element.x, element.y, 4, 0, Math.PI * 2);
            ctx.fillStyle = "#000000";
            ctx.fill();
            ctx.strokeStyle = "#ffffff";
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
          });
        }
      });
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>ยานพาหนะผ่านต่อเวลา</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-full">
          <Bar options={options} data={data} plugins={[circlePlugin]} />
        </div>
      </CardContent>
    </Card>
  );
}
