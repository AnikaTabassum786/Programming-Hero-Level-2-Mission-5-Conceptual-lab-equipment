import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    trustedOrigins: [
    // "http://localhost:3000",
    process.env.FRONTEND_URL!
  ],
    emailAndPassword: { 
    enabled: true, 
    minPasswordLength:6,
  },
});