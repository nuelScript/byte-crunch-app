import { User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

export type Product = {
  image: string;
  name: string;
  price: number;
  description: string;
  size: string;
  categories: string[];
  vendor: string;
};

export type Order = {
  product: Product;
  quantity: number;
  total: number;
};
