import { TB_VEHICLES } from "@prisma/client";

export type VehicleData = Omit<TB_VEHICLES, "id" | "createdAt">;

export type CountPeriod = "pastHour" | "day" | "week";
