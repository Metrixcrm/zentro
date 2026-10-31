// eslint-disable-next-line @typescript-eslint/no-explicit-any
let PrismaClient: any;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  PrismaClient = require("@prisma/client").PrismaClient;
} catch {
  PrismaClient = null;
}

const globalForPrisma = globalThis as unknown as { prisma: any };

export const prisma = PrismaClient
  ? globalForPrisma.prisma || new PrismaClient()
  : (null as any);

if (PrismaClient && process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
