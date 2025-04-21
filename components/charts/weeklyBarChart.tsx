"use client";

import React, { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  Title,
  CategoryScale,
  LinearScale,
  BarElement,
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
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["SUN", "MON", "TUES", "WED", "THUR", "FRI", "SAT"];
const values = [10000, 25000, 32000, 13000, 23200, 18000, 29000];

export default function WeeklyBarChart() {
  const data = useMemo<ChartData<"bar">>(() => {
    return {
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: "rgba(75, 192, 192, 0.8)",
        },
      ],
    };
  }, []);
  return (
    <Card>
      <CardHeader>
        <CardTitle>ยานพาหนะผ่านต่อวัน</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-full">
          <Bar options={options} data={data} />
        </div>
      </CardContent>
    </Card>
  );
}
