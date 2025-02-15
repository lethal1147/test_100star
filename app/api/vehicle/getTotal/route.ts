import prisma from "@/lib/prisma";
import { CountPeriod } from "@/types/vehicleType";
import { handleError } from "@/utils/handleError";
import dayjs from "dayjs";
import { type NextRequest } from "next/server";

/**
 *
 * @param req NextRequest
 * @returns BaseResponse<{vehicleType: Record<string, number>, vehicleColor: Record<string, number>}>
 * Using for get total vehicles base on color and type
 */
export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;

    const dateParams = searchParams.get("date");
    const date = dateParams ? dayjs(dateParams) : dayjs();
    if (!date.isValid()) {
      throw new Error("Invalid date params.");
    }
    let startTime: Date;
    let endTime: Date;

    const period = (searchParams.get("period") as CountPeriod) ?? "day";

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

    const [vehicleType, vehicleColor] = await Promise.all([
      prisma.tB_VEHICLES.groupBy({
        by: ["vehicleType"],
        _count: { _all: true },
        where: where,
      }),
      prisma.tB_VEHICLES.groupBy({
        by: ["vehicleColor"],
        _count: { _all: true },
        where: where,
      }),
    ]);
    return Response.json({
      error: false,
      message: "Get all vehicles data.",
      data: {
        vehicleType: vehicleType.reduce((acc, ele) => {
          acc[ele.vehicleType] = ele._count._all;
          return acc;
        }, {} as Record<string, number>),
        vehicleColor: vehicleColor.reduce((acc, ele) => {
          acc[ele.vehicleColor] = ele._count._all;
          return acc;
        }, {} as Record<string, number>),
      },
    });
  } catch (err) {
    return Response.json(handleError(err));
  }
}
