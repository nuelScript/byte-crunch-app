import React from 'react'
import Link from 'next/link';

interface VendorProps {
  vendor: {
    image: string;
    name: string;
    slug: {
      current: string;
    };
    details: string;
  };
}

const Vendors: React.FC<VendorProps> = ({vendor}) => {
  return (
    <div>
      <Link href={`/vendor/${vendor.slug}`}>
        <div className="relative h-[350px] w-[350px] scale-100 cursor-pointer rounded-2xl transition hover:scale-110 mb-16">
          <img
            src={vendor.image}
            width={350}
            height={250}
            className="h-[350px] scale-100 rounded-2xl bg-[#ebebeb] object-cover"
          />
           <div className='absolute bottom-0 left-0 w-full h-[100px] bg-white opacity-70 rounded-b-2xl flex items-center px-3'>
                <h2 className='text-lg font-bold'>{vendor.name}</h2>
           </div>
        </div>
      </Link>
    </div>
  );
}

export default Vendors;