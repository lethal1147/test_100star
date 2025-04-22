import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const days = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
];
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

const colors = [
  { value: "0-25%", className: "bg-emerald-100", width: "w-[15%]" },
  { value: "25-50%", className: "bg-emerald-400", width: "w-[20%]" },
  { value: "50-75%", className: "bg-emerald-600", width: "w-[30%]" },
  { value: "75-100%", className: "bg-emerald-800", width: "w-[35%]" },
];

export default function HeatMap() {
  const data = days.map(() => hours.map(() => Math.floor(Math.random() * 5)));
  const maxValue = Math.max(...data.flat());

  const formattedData = data.map((row) =>
    row.map((value) => {
      const percentage = (value / maxValue) * 100;
      let level = 1;
      if (percentage > 75) {
        level = 4;
      } else if (percentage > 50) {
        level = 3;
      } else if (percentage > 25) {
        level = 2;
      }

      return { value, level };
    })
  );

  const getColor = (value: number) => colors[value - 1] || colors[0];

  return (
    <Card className="h-full p-5">
      <CardHeader>
        <CardTitle className="font-bold text-xl">ฮีทแมพ</CardTitle>
      </CardHeader>
      <CardContent className="px-3 mx-auto">
        <TooltipProvider>
          {days.map((day, dayIndex) => (
            <div key={day} className="flex items-center mb-1">
              <div className="w-20 text-xs font-medium text-end mr-2">
                {day}
              </div>
              <div className="flex-1 grid grid-cols-9 gap-2">
                {hours.map((_, hourIndex) => (
                  <Tooltip key={hourIndex}>
                    <TooltipTrigger>
                      <div
                        className={cn(
                          "h-6",
                          getColor(formattedData[dayIndex][hourIndex].level)
                            .className
                        )}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{formattedData[dayIndex][hourIndex].value}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          ))}
        </TooltipProvider>

        <div className="flex">
          <div className="w-20 mr-2" />
          <div className="flex-1 grid grid-cols-9 gap-2">
            {hours.map((hour) => (
              <p className="text-xs text-center" key={hour}>
                {hour}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-end w-full">
          <div className="flex w-11/12 justify-end">
            {colors.map((color) => (
              <div key={color.className} className={cn("", color.width)}>
                <div className={cn("w-full h-3", color.className)} />
                <p className="text-center text-xs">{color.value}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
