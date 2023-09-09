"use client";

import { useStateContext } from "@/context/StateContext";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Quantity = () => {
  const { incQty, decQty, qty, onAdd } = useStateContext();
  return (
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
  );
};

export default Quantity;
