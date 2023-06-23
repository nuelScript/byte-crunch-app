import HeroBanner from "../components/Banner/HeroBanner";
import { getBanners, getProducts, getVendors } from "@/sanity/sanity-utils";
import ProductComponent from "../components/Product";
import Footer from "../components/Footer/Footer";
import VendorComponent from "../components/Vendors";
import Link from "next/link";

export default async function Home() {
  const products = await getProducts(); // get all products from sanity
  const banners = await getBanners(); // get all banners from sanity
  const vendors = await getVendors(); // get all vendors from sanity

  return (
    <>
      <div>
        <HeroBanner heroBanner={banners.length && banners[0]} />{" "}
        {/* display the first banner */}
        <div className="mx-0 my-8 text-center text-black">
          <h2 className="text-3xl font-bold">Popular Meals</h2>
        </div>
        <div className="mt-5 flex w-full flex-wrap justify-center gap-8">
          {products?.map((product) => (
            <ProductComponent key={product._id} product={product} />
          ))}{" "}
          {/* map through all products and display them */}
        </div>
        <div className="mx-0 my-8 mt-20 text-center text-black">
          <Link href="/vendors">
            <h2 className="text-3xl font-bold hover:underline">Vendors</h2>
          </Link>
        </div>
        <div className="mt-5 flex w-full flex-wrap justify-center gap-8">
          {vendors?.map((vendor) => (
            <VendorComponent key={vendor._id} vendor={vendor} />
          ))}
          {/* map through all vendors and display them */}
        </div>
      </div>
      <Footer />
    </>
  );
}
