/* eslint-disable @next/next/no-img-element */
"use client";

import { useMemo, useRef, useState } from "react";
import Container from "../components/Container";
import { Order } from "../types";
import { getRandomOrders } from "../libs/generateDummyData";
import CartCard from "./CartCard";
import { useStateContext } from "@/context/StateContext";
import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { TbCurrencyNaira } from "react-icons/tb";
import { MdOutlineCancel } from "react-icons/md";

// function CartPage() {
//   const [orders, setOrders] = useState(getRandomOrders());

//   const removeOrders = (index: number) => {
//     setOrders((orders) => orders.filter((_, i) => i !== index));
//   };
//   const totalPrice = useMemo(
//     () =>
//       orders
//         .map((order) => order.total * order.quantity)
//         .reduce((a, b) => a + b, 0),
//     [orders]
//   );

//   const deliveryFee = useMemo(() => Math.floor(Math.random() * 100) + 100, []);
//   return (
//     <Container className="my-8">
//       <p className="my-4 text-xl font-semibold underline">Check Out</p>
//       {orders.map((order, index) => (
//         <CartCard
//           key={order.product.name}
//           order={order}
//           removeOrder={() => removeOrders(index)}
//         />
//       ))}
// <div className="flex flex-col items-end">
//   <div className="[&>p]:w-48">
//     <p className="my-1 flex  text-neutral-500">
//       Total: <span className="ml-auto text-right">{totalPrice}</span>
//     </p>
//     <p className=" my-1 flex text-neutral-500">
//       Delivery Fee:{" "}
//       <span className="ml-auto text-right">{deliveryFee}</span>
//     </p>
//     <p className="my-4 flex text-xl font-semibold">
//       Grand Total:
//       <span className="ml-auto text-right">
//         {totalPrice + deliveryFee}
//       </span>
//     </p>
//   </div>
// </div>
//       <div className="w-full h-fit flex justify-center mt-16">
//         <button type="button" className="p-3 py-3.5 w-[220px] font-bold text-white bg-buttoncolor rounded-2xl text-xl">Confirm Order</button>
//       </div>
//     </Container>
//   );
// }

// export default CartPage;

const CartPage = () => {
  const cartRef = useRef<HTMLDivElement>(null);
  const { totalPrice, totalQuantity, cartItems, setShowCart } =
    useStateContext();

  return (
    <Container className="my-8" ref={cartRef}>
      <p className="my-4 inline-block text-xl font-semibold underline">
        Check Out
      </p>
      <span className="ml-3 text-buttoncolor">({totalQuantity} items)</span>

      {cartItems.length < 1 && (
        <div className="m-10 flex flex-col items-center text-center">
          <AiOutlineShopping className="text-center text-9xl text-black" />
          <h3 className="text-lg">Your Shopping Cart is Empty</h3>
          <Link href={"/home"}>
            <button
              type="button"
              className="mt-10 w-full max-w-[400px] scale-100 cursor-pointer rounded-2xl border-none bg-buttoncolor px-3 py-[10px] text-sm uppercase text-white transition hover:scale-110"
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      )}

      <div className="mt-4 max-h-[70vh] overflow-auto px-3 py-5">
        {cartItems.length >= 1 &&
          cartItems.map((item, index) => (
            <div
              className="my-8 flex items-center border-b-2 border-dashed border-black py-4"
              key={item._id}
            >
              <div className="h-full w-1/5 pe-4">
                <img
                  className="rounded-xl"
                  src={item.image[0]}
                  alt={item.name}
                  width={240}
                  height={320}
                />
              </div>
              <div className="flex h-full w-2/5">
                <div className="ps-10">
                  <p className="my-2 w-fit text-xl font-semibold">
                    {item.name}
                  </p>
                  <p className="my-2 font-light">Qty: {item.quantity}</p>
                </div>
              </div>
              <div className="h-full w-1/5 ">
                <span className="me-1">
                  <TbCurrencyNaira className="inline" size={20} />
                </span>
                <span>{item.price}</span>
              </div>
              <div className="h-full w-1/5 ">
                <MdOutlineCancel
                  className="mx-auto hover:cursor-pointer"
                  size={25}
                />
              </div>
            </div>
          ))}
      </div>
      {cartItems.length >= 1 && (
        <div className="flex flex-col items-end">
          <div className="[&>p]:w-48">
            <p className="my-1 flex  text-neutral-500">
              Total:{" "}
              <span className="ml-auto text-right">
                <TbCurrencyNaira
                  className="mx-0 mb-0.5 inline-block"
                  size={21}
                />{" "}
                {totalPrice}
              </span>
            </p>
            <p className=" my-1 flex text-neutral-500">
              Delivery Fee: <span className="ml-auto text-right"></span>
            </p>
            <p className="my-4 flex text-lg font-semibold">
              Grand Total:
              <span className="ml-auto text-right">
                <TbCurrencyNaira
                  className="mx-0 mb-0.5 inline-block"
                  size={20}
                />{" "}
                {totalPrice}
              </span>
            </p>
          </div>
        </div>
      )}
      <div className="mt-16 flex h-fit w-full justify-center">
        <button
          type="button"
          className="w-[220px] rounded-2xl bg-buttoncolor p-3 py-3.5 text-xl font-bold text-white"
        >
          Confirm Order
        </button>
      </div>
    </Container>
  );
};

export default CartPage;
