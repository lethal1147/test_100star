import { VehicleData } from "@/types/vehicleType";
import dayjs from "dayjs";
import { randomDateInRange, randomItemInArray } from "./random";
import { VEHICLE_COLORS, VEHICLE_TYPES } from "@/constants/vehicles";

/**
 *
 * @param numberOfDays Number
 * @returns VehicleData
 * Using for generate mock-up vehicle data by giving period day as parameter.
 */
export const generateVehicleInPeriodDay = (
  numberOfDays: number = 1
): VehicleData => {
  const endDate = dayjs().toDate();
  const startDate = dayjs().subtract(numberOfDays, "day").toDate();
  return {
    vehicleColor: randomItemInArray(VEHICLE_COLORS),
    vehicleType: randomItemInArray(VEHICLE_TYPES),
    timestamp: randomDateInRange(startDate, endDate),
  };
};

export const generateNewVehicleToday = (): VehicleData => {
  const startOfDay = dayjs().startOf("day");
  const endOfDay = dayjs();

  const randomTimestamp = new Date(
    startOfDay.valueOf() +
      Math.random() * (endOfDay.valueOf() - startOfDay.valueOf())
  );
  return {
    vehicleColor: randomItemInArray(VEHICLE_COLORS),
    vehicleType: randomItemInArray(VEHICLE_TYPES),
    timestamp: randomTimestamp,
  };
};
