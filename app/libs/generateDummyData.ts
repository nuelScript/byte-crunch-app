import { faker } from "@faker-js/faker";
import { Product } from "../types";
// Generate dummy product from product type
export const generateDummyProduct = (): Product => {
  return {
    image: faker.image.url({
      width: 240,
      height: 240,
    }),
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price()),
    description: faker.commerce.productDescription(),
    size: ["S", "M", "L", "XL"][Math.floor(Math.random() * 3)],
    categories: [faker.commerce.department(), faker.commerce.department()],
    vendor: faker.company.name(),
  };
};

export const generateDummyOrder = (product: Product) => {
  return {
    product,
    quantity: Math.floor(Math.random() * 10),
    total: Math.floor(Math.random() * 1000),
  };
};
