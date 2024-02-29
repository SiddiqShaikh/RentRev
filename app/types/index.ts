import { User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  updatedAt: string;
  createdAt: string;
  emailVerified: string;
};
