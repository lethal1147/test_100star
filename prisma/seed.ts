import prisma from "@/lib/prisma";
import { VehicleData } from "@/types/vehicleType";
import { generateVehicleInPeriodDay } from "@/utils/generate";

const seedDatabase = async () => {
  try {
    const seedData: VehicleData[] = [];
    for (let i = 0; i < 100; i++) {
      seedData.push(generateVehicleInPeriodDay(7));
    }

    await prisma.$transaction(async (pris) =>
      pris.tB_VEHICLES.createMany({ data: seedData })
    );
    console.log("Seed data successfully, 100 records added.");
  } catch (err) {
    console.log("Error on seed database.");
    console.error(err);
  }
};

seedDatabase();
