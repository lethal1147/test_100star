import prisma from "@/lib/prisma";
import { handleError } from "@/utils/handleError";

/**
 *
 * @returns BaseResponse<{vehicleColors: string[], vehicleTypes: string[]}>
 * Using for get master dropdown of vehicle's type and vehicle's color
 */
export async function GET() {
  try {
    const [vehicleColors, vehicleTypes] = await Promise.all([
      prisma.tB_VEHICLES.groupBy({
        by: ["vehicleColor"],
      }),
      prisma.tB_VEHICLES.groupBy({
        by: ["vehicleType"],
      }),
    ]);

    return Response.json({
      error: false,
      message: "Get all vehicles data.",
      data: {
        vehicleColors: vehicleColors.map((ele) => ele.vehicleColor),
        vehicleTypes: vehicleTypes.map((ele) => ele.vehicleType),
      },
    });
  } catch (err) {
    return Response.json(handleError(err));
  }
}
