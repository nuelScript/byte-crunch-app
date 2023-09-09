import React from "react";
import Link from "next/link";
import Image from "next/image";

interface VendorProps {
  vendor: {
    image: string;
    name: string;
    slug: string;
    details: string;
  };
}

const VendorComponent: React.FC<VendorProps> = ({ vendor }) => {
  return (
    <div>
      <Link href={`/vendor/${vendor.slug}`}>
        <div className="relative mb-16 h-[350px] w-[350px] scale-100 cursor-pointer rounded-2xl transition hover:scale-110">
          <Image
            src={vendor.image}
            width={350}
            height={250}
            className="h-[350px] scale-100 rounded-2xl bg-[#ebebeb] object-cover"
            alt={vendor.name}
          />
          <div className="absolute bottom-0 left-0 flex h-[100px] w-full items-center rounded-b-2xl bg-white px-3 opacity-70">
            <h2 className="text-lg font-bold">{vendor.name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VendorComponent;
