import { Product } from "@/types/Product";
import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config';
import { Banner } from "@/types/Banner";

export async function getProducts(): Promise<Product[]> {
   
    return createClient(clientConfig).fetch(
        groq`*[_type == 'product']{
            _id,
            _createdAt,
            name,
            'slug': slug.current,
            'image': image[].asset->url,
             price,
             details
        }`
    );
};

export async function getBanners(): Promise<Banner[]> {
   
    return createClient(clientConfig).fetch(
        groq`*[_type == 'banner']{
            _id,
            _createdAt,
            buttonText,
            product,
            desc,
            smallText,
            midText,
            largeText1,
            largeText2,
            discount,
            saleTime,
            'image': image.asset->url
        }`
    )
};

export async function getProduct(slug: string): Promise<Product> {
    return createClient(clientConfig).fetch(
        groq`*[_type == 'product' && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            'slug': slug.current,
            'image': image[].asset->url,
             price,
             details
        }`,
        { slug }
    );
}