import prisma from "@/lib/prisma";
import { generateNewVehicleToday } from "@/utils/generate";
import { handleError } from "@/utils/handleError";

export async function GET() {
  try {
    const newVehicle = await prisma.tB_VEHICLES.create({
      data: generateNewVehicleToday(),
    });
    console.log("GENERATED VEHICLE : ", newVehicle);
  } catch (err) {
    return Response.json(handleError(err));
  }
}
