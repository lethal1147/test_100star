import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { withPulse } from "@prisma/extension-pulse/node";

const prismaClientSingleton = () => {
  return new PrismaClient()
    .$extends(withAccelerate())
    .$extends(withPulse({ apiKey: process.env.PULSE_API_KEY ?? "" }));
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
