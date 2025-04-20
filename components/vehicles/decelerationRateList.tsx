import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

const suggestAdsTimeMapper: Record<number, string> = {
  3: "ยาว",
  2: "กลาง",
  1: "สั้น",
};

const vehicleSpeedMapper: Record<
  number,
  { text: string; textColor: string; color: string }
> = {
  3: { text: "Fast", textColor: "text-green-500", color: "border-green-500" },
  2: {
    text: "Moderate",
    textColor: "text-orange-500",
    color: "border-orange-500",
  },
  1: { text: "Slow", textColor: "text-red-500", color: "border-red-500" },
};

const MOCK_DECELERATION_RATE_DATA = [
  {
    timeRange: "6-8 AM",
    decelerationTime: 3,
    suggestAdsTime: 1,
    vehicleSpeed: 3,
  },
  {
    timeRange: "9-12 PM",
    decelerationTime: 6,
    suggestAdsTime: 2,
    vehicleSpeed: 2,
  },
  {
    timeRange: "12-4 PM",
    decelerationTime: 8,
    suggestAdsTime: 3,
    vehicleSpeed: 1,
  },
  {
    timeRange: "5-8 PM",
    decelerationTime: 4,
    suggestAdsTime: 2,
    vehicleSpeed: 3,
  },
  {
    timeRange: "9-10 PM",
    decelerationTime: 3,
    suggestAdsTime: 1,
    vehicleSpeed: 3,
  },
];

const getBadge = (vehicleSpeed: keyof typeof vehicleSpeedMapper) => {
  const mapped = vehicleSpeedMapper[vehicleSpeed];
  return (
    <VehicleSPeedTag
      text={mapped.text}
      textColor={mapped.textColor}
      color={mapped.color}
    />
  );
};

export default function DecelerationRateList() {
  return (
    <Card className="text-xs">
      <CardHeader className="text-lg pt-4 pb-0">
        <CardTitle>อัตราการชะลอตัว</CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="text-xs">
          <TableHeader className="h-4">
            <TableRow>
              <TableHead>ช่วงเวลา</TableHead>
              <TableHead>เวลาในการชะลอตัว</TableHead>
              <TableHead>ระยะเวลาโฆษณาที่แนะนำ</TableHead>
              <TableHead>ความเร็วยานพาหนะ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MOCK_DECELERATION_RATE_DATA.map((data) => (
              <TableRow key={data.timeRange}>
                <TableCell>{data.timeRange}</TableCell>
                <TableCell>{data.decelerationTime} วินาที</TableCell>
                <TableCell>
                  {suggestAdsTimeMapper[data.suggestAdsTime]}
                </TableCell>
                <TableCell>{getBadge(data.vehicleSpeed)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function VehicleSPeedTag({
  text,
  textColor,
  color,
}: Readonly<{ text: string; textColor: string; color: string }>) {
  return (
    <Badge
      className={cn("border text-xs py-0.25", color, textColor)}
      variant="outline"
    >
      {text}
    </Badge>
  );
}
