import { getVendors } from '@/sanity/sanity-utils';
import React from 'react'
import VendorList from '../components/VendorList';

export default async function Vendors() {
  const vendors = await getVendors(); // get all vendors from sanity

  return (
    <div className='w-full h-full'>
      <div className="flex w-full justify-around">
        {vendors?.map((vendor) => (
          <VendorList key={vendor._id} vendor={vendor} />
        ))}
      </div>
    </div>
  );
}
