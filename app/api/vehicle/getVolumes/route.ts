import dayjs from "dayjs";
import { type NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { handleError } from "@/utils/handleError";
import { CountPeriod } from "@/types/vehicleType";

/**
 *
 * @param req : NextRequest
 * @query mode : "day" | "week"
 * @returns BaseResponse<number[]>
 * Using for get volumes vehicle in each mode.
 */
export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const dateParams = searchParams.get("date");
    const date = dateParams ? dayjs(dateParams) : dayjs();

    if (!date.isValid()) {
      throw new Error("Invalid date params.");
    }

    const period = (searchParams.get("period") as CountPeriod) ?? "day";

    let startTime: Date;
    let endTime: Date;
    switch (period) {
      case "pastHour":
        startTime = date.subtract(1, "hour").toDate();
        endTime = date.endOf("hour").toDate();
        break;
      case "day":
        startTime = date.startOf("day").toDate();
        endTime = date.endOf("day").toDate();
        break;
      case "week":
        startTime = date.startOf("week").toDate();
        endTime = date.endOf("week").toDate();
        break;
      default:
        throw new Error("Period invalid.");
    }

    const color = searchParams.get("color") ?? "";
    const type = searchParams.get("type") ?? "";
    const where = {
      timestamp: { gte: startTime, lte: endTime },
      ...(color && color !== "all" ? { vehicleColor: color } : {}),
      ...(type && type !== "all" ? { vehicleType: type } : {}),
    };

    let resultData: number[] = [];
    if (period === "pastHour" || period === "day") {
      const result = await prisma.tB_VEHICLES.findMany({
        where: where,
        select: {
          timestamp: true,
        },
      });

      // Mock array of volumes in one day (24hours)
      const volumesInDay = Array(24).fill(0);
      result.forEach((rec) => {
        const hour = dayjs(rec.timestamp).hour();
        volumesInDay[hour]++;
      });

      resultData = volumesInDay;
    } else {
      const result = await prisma.tB_VEHICLES.findMany({
        where: where,
        select: {
          timestamp: true,
        },
      });

      // Mock array of volumes in one week (7days)
      const volumesInWeek = Array(7).fill(0);
      result.forEach((rec) => {
        const day = dayjs(rec.timestamp).day();
        volumesInWeek[day]++;
      });

      resultData = volumesInWeek;
    }

    return Response.json({
      error: false,
      message: `Get volumes of vehicles data.`,
      data: resultData,
    });
  } catch (err) {
    return Response.json(handleError(err));
  }
}
