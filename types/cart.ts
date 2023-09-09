import { Product } from "./Product";

export type CartProduct = {
    product: Product;
    quantity: number;
};
export type Cart = {


    products: CartProduct[];
    total: number;
}