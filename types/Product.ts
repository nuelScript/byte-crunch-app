export type Product = {
    _id: string,
    _createdAt: Date;
    name: string;
    slug: string;
    image: string[];
    details: string;
    price: number;
    size: string[];
}