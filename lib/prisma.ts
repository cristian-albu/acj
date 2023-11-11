import { PrismaClient } from "@prisma/client";

type CustomNodeTsGlobal = {
    prisma: PrismaClient;
};

declare const global: CustomNodeTsGlobal;

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
