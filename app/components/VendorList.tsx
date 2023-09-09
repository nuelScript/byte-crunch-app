import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Product } from "../types";
import { Vendor } from "@/types/Vendor";
import { TbCurrencyNaira } from "react-icons/tb";

interface VendorListProps {
  vendor: {
    name: string;
    image: string;
    details: string;
    product: {
      name: string;
      price: number;
      details: string;
      image: string[];
      size: string[];
    }[];
  };
}

const VendorList: React.FC<VendorListProps> = ({ vendor }) => {
  return (
    <Tabs defaultValue={vendor.name} className="w-[400px]">
    <TabsList className="grid w-full grid-cols-4">
      <TabsTrigger
        className="bg-none text-center text-base font-medium data-[state=active]:underline"
        value={vendor.name}
      >
        {vendor.name}
      </TabsTrigger>
    </TabsList>
    <TabsContent
      className="flex flex-col items-center justify-center"
      value={vendor.name}
    >
      <Card className="rounded-2xl">
        <CardContent className="flex h-[480px] w-[350px] flex-col items-center justify-center p-0">
          <Image
            width={350}
            height={250}
            className="mb-8 h-[310px] w-[350px] rounded-2xl bg-[#ebebeb] object-cover object-center transition"
            src={vendor.image}
            alt="vendor-image"
          />
          <div className="flex w-full flex-col gap-y-4 px-4 pb-4">
            <div className="flex justify-between ">
              <p className="text-lg font-medium">{vendor.product[0]?.name}</p>
              <p className="text-lg font-medium flex gap-x-4">
               <span className="rounded-lg bg-buttoncolor w-8 h-8 flex items-center justify-center">{vendor.product[0]?.size[1]}</span> 
               <span className="rounded-lg bg-slate-300 w-8 h-8 flex items-center justify-center">{vendor.product[0]?.size[2]}</span>
              </p>
            </div>
            <div className="leading-tight">{vendor.product[0].details}</div>
            <div className="flex justify-between ">
              <span className="border-2 border-black rounded-2xl px-4 py-2 flex items-center justify-center">
                <TbCurrencyNaira className="mr-2 inline w-6 h-6" />{vendor.product[0]?.price}
              </span>
              <span className="bg-buttoncolor text-white text-lg font-light flex items-center justify-center rounded-3xl px-4">Order Now</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  </Tabs>
  );
};

export default VendorList;
