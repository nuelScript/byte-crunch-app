import { getVendor } from '@/sanity/sanity-utils';
import React from 'react'

type Props ={
  params: {
    slug: string;
  }
}

export default async function VendorDetails({params}: Props) {
  const slug = params.slug;
  const vendor = await getVendor(slug);

  return (
      <div>
        <img src={vendor.image} alt={vendor.details} />
      </div>
  )
}