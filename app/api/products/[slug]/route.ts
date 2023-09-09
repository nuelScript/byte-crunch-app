import { getProduct } from "@/sanity/sanity-utils";
import { NextResponse } from "next/server";

export const GET = async (request: Request, { params }: { params: { slug: string } }) => {
    const res = await getProduct(params.slug);

    return NextResponse.json(res);
}
