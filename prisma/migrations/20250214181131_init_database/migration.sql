-- CreateTable
CREATE TABLE "TB_VEHICLES" (
    "id" SERIAL NOT NULL,
    "vehicleColor" TEXT NOT NULL,
    "vehicleType" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TB_VEHICLES_pkey" PRIMARY KEY ("id")
);
