import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

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

export default function HeatMap() {
  const data = days.map(() => hours.map(() => Math.floor(Math.random() * 5)));
  const getColor = (value: number) => {
    const colors = [
      "bg-emerald-100",
      "bg-emerald-200",
      "bg-emerald-300",
      "bg-emerald-400",
      "bg-emerald-500",
      "bg-emerald-600",
      "bg-emerald-700",
    ];
    return colors[value] || colors[0];
  };
  return (
    <Card className="h-full p-5">
      <CardHeader>
        <CardTitle className="font-bold text-xl">ฮีทแมพ</CardTitle>
      </CardHeader>
      <CardContent className="px-3 mx-auto">
        {days.map((day, dayIndex) => (
          <div key={day} className="flex items-center mb-1">
            <div className="w-20 text-xs font-medium text-end mr-2">{day}</div>
            <div className="flex-1 grid grid-cols-9 gap-2">
              {hours.map((_, hourIndex) => (
                <div
                  key={hourIndex}
                  className={`h-6 ${getColor(data[dayIndex][hourIndex])}`}
                ></div>
              ))}
            </div>
          </div>
        ))}
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
            <div className="w-full h-3 bg-emerald-100"></div>
            <div className="w-full h-3 bg-emerald-200"></div>
            <div className="w-full h-3 bg-emerald-300"></div>
            <div className="w-full h-3 bg-emerald-400"></div>
            <div className="w-full h-3 bg-emerald-500"></div>
            <div className="w-full h-3 bg-emerald-600"></div>
            <div className="w-full h-3 bg-emerald-700"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
