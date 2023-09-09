import { getVendors } from "@/sanity/sanity-utils";
import React from "react";
import VendorList from "../components/VendorList";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Vendor } from "@/types/Vendor";

export default async function Vendors() {
  const vendors = await getVendors();
  return (
    <div className="flex h-full w-full flex-col gap-y-16">
      <div className="flex w-full justify-around bg-gradient-to-b from-primarycolor2">
        {vendors?.map((vendor) => (
          <VendorList key={vendor._id} vendor={vendor} />
        ))}
      </div>
      <div className="flex w-full justify-end">
        <Button className="mr-16 rounded-xl bg-buttoncolor px-12 text-center">
          Check Out
        </Button>
      </div>
    </div>
  );
}
