import { getVendors } from "@/sanity/sanity-utils"
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
    const res = await getVendors();

    return NextResponse.json(res);
}