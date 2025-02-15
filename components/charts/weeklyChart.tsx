"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { DayOfWeekShort } from "@/types/chartType";

const DAY_MAPPING: Record<number, DayOfWeekShort> = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

const WeeklyChart = ({ weeklyData }: { weeklyData: number[] }) => {
  const data = weeklyData.map((volume, index) => ({
    day: DAY_MAPPING[index],
    volume,
  }));

  return (
    <ChartContainer
      config={{
        volume: {
          label: "Volume",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-[500px] max-w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            label={{ value: "Day", position: "insideBottom", offset: -5 }}
          />
          <YAxis
            allowDecimals={false}
            label={{
              value: "Number of vehicles",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area
            type="monotone"
            dataKey="volume"
            stroke="var(--color-volume)"
            fill="var(--color-volume)"
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default WeeklyChart;
