import { Product } from "./Product";

export type Vendor = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    details: string;
    product: {
        name: string;
        slug: string;
        price: number;
        details: string;
        image: string[];
        size: string[];
    }[];
}