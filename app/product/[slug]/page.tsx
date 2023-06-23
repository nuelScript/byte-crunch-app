/* eslint-disable @next/next/no-img-element */
"use client";

import { getProduct, getProducts } from "@/sanity/sanity-utils";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { TbCurrencyNaira } from "react-icons/tb";
import React, { useEffect, useState } from "react";
import ProductComponent from "@/app/components/Product";
import { UserContext, useStateContext } from "@/context/StateContext";

type Props = {
  param: {
    slug: string;
  };
};

const fetchData = async (slug: string) => {
  return {
    product: await getProduct(slug),
    products: await getProducts(),
  };
};

export default async function ProductDetails({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const [index, setIndex] = useState(0);
  const { incQty, decQty, qty, onAdd } = useStateContext();
  const { product, products } = await fetchData(slug);

  return (
    <div>
      <div className="m-10 mt-[60px] flex gap-10 text-[#324d67]">
        <div>
          <div className="image-container">
            <img
              src={product.image && product.image[index]}
              alt={product.details}
              className="h-[400px] w-[400px] cursor-pointer rounded-2xl object-cover transition hover:bg-[#f02d34] md:w-[350px]"
            />
          </div>
          <div className="mt-5 flex gap-3">
            {product.image?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={product.details}
                onMouseEnter={() => setIndex(i)}
                className={
                  i === index
                    ? "h-[70px] w-[70px] scale-100 cursor-pointer rounded-lg bg-[#ebebeb] bg-cover hover:scale-110"
                    : "h-[70px] w-[70px] cursor-pointer rounded-lg bg-[#ebebeb] bg-cover"
                }
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="mt-3 flex items-center gap-1 text-buttoncolor">
            <div className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p className="mt-0 text-[#324d67]">(20)</p>
          </div>
          <h4 className="mt-1">Details: </h4>
          <p className="mt-1">{product.details}</p>
          <p className="mt-8 text-2xl font-bold text-black">
            <TbCurrencyNaira className="m-0 mb-1 inline-block" />{" "}
            {product.price}
          </p>
          <div className="mt-[10px] flex items-center gap-5">
            <h3>Quantity:</h3>
            <p className="border border-solid border-black p-[4px]">
              <span
                className="cursor-pointer border-r border-solid border-black px-3 py-[6px] text-xl text-black"
                onClick={decQty}
              >
                <AiOutlineMinus className="inline-block" />
              </span>
              <span className="cursor-pointer border-r border-solid border-black px-3 py-[6px] text-xl text-black">
                {qty}
              </span>
              <span
                className="cursor-pointer px-3 py-[6px] text-xl text-black"
                onClick={() => {
                  incQty();
                }}
              >
                <AiOutlinePlus className="inline-block" />
              </span>
            </p>
          </div>
          <div className="flex gap-8">
            <button
              type="button"
              className="mt-10 w-[200px] scale-100 cursor-pointer border border-solid border-black bg-white px-5 py-3 text-lg font-medium text-black transition hover:scale-110 md:w-[150px]"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="mt-10 w-[200px] scale-100 cursor-pointer border-none bg-buttoncolor px-5 py-3 text-lg font-medium text-white transition hover:scale-110 md:w-[150px]"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[120px]">
        <h2 className="m-[50px] text-center text-xl font-semibold text-black">
          You may also like
        </h2>
        <div className="relative h-[400px] w-full overflow-x-hidden">
          <div className="absolute mt-5 flex w-[180%] animate-marquee gap-8 whitespace-nowrap will-change-transform">
            {products?.map((item) => (
              <ProductComponent key={product._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
