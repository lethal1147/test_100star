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

const DailyChart = ({ dailyData }: { dailyData: number[] }) => {
  const data = dailyData.map((value, index) => ({
    hour: index,
    volume: value,
  }));
  return (
    <ChartContainer
      config={{
        volume: {
          label: "Volume",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-[500px] max-w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="hour"
            tickFormatter={(value) => `${value}:00`}
            label={{ value: "Hour", position: "insideBottom", offset: -5 }}
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

export default DailyChart;
