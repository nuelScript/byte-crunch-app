import { getProducts } from "@/sanity/sanity-utils"
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
    const res = await getProducts();

    return NextResponse.json(res);
}