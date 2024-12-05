"use client";

import {
  ChartContainer,
  type ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartConfig = {
  value: {
    label: "Population",
    color: "#2563eb",
  },
} satisfies ChartConfig;

export function MyChart({ data }: any) {
  return (
    <div className="lg:w-1/3 w-full overflow-x-scroll px-2 pb-3 bg-white rounded-b-md">
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] max-h-80 lg:w-dvw w-[1500px]"
      >
        <BarChart accessibilityLayer data={data}>
          <XAxis
            dataKey="year"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            interval={2}
          />
          <ChartTooltip content={<ChartTooltipContent />} />

          <Bar dataKey="value" fill="#2563eb" radius={4} barSize={15} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
