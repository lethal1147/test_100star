import prisma from "@/lib/prisma";
import { generateNewVehicleToday } from "@/utils/generate";

let intervalRunning = false;

// const TWENTY_MIN = 20 * (60 * 1000);
const ONE_MIN = 60 * 1000;

export async function GET() {
  if (!intervalRunning) {
    intervalRunning = true;
    console.log("Starting mock data generation...");

    setInterval(async () => {
      console.log("Generating new mock data...");
      await prisma.tB_VEHICLES.create({
        data: generateNewVehicleToday(),
      });
    }, ONE_MIN);
  }

  return Response.json({ message: "Mock data generator started" });
}
