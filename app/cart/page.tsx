"use client";

import { useMemo, useState } from "react";
import Container from "../components/Container";
import { Order } from "../types";
import { getRandomOrders } from "../libs/generateDummyData";
import CartCard from "./CartCard";


function CartPage() {
  const [orders, setOrders] = useState(getRandomOrders());

  const removeOrders = (index: number) => {
    setOrders((orders) => orders.filter((_, i) => i !== index));
  };
  const totalPrice = useMemo(
    () =>
      orders
        .map((order) => order.total * order.quantity)
        .reduce((a, b) => a + b, 0),
    [orders]
  );

  const deliveryFee = useMemo(() => Math.floor(Math.random() * 100) + 100, []);
  return (
    <Container className="my-8">
      <p className="my-4 text-xl font-semibold underline">Check Out</p>
      {orders.map((order, index) => (
        <CartCard
          key={order.product.name}
          order={order}
          removeOrder={() => removeOrders(index)}
        />
      ))}
      <div className="flex flex-col items-end">
        <div className="[&>p]:w-48">
          <p className="my-1 flex  text-neutral-500">
            Total: <span className="ml-auto text-right">{totalPrice}</span>
          </p>
          <p className=" my-1 flex text-neutral-500">
            Delivery Fee:{" "}
            <span className="ml-auto text-right">{deliveryFee}</span>
          </p>
          <p className="my-4 flex text-xl font-semibold">
            Grand Total:
            <span className="ml-auto text-right">
              {totalPrice + deliveryFee}
            </span>
          </p>
        </div>
      </div>
      <div className="w-full h-fit flex justify-center mt-16">
        <button type="button" className="p-3 py-3.5 w-[220px] font-bold text-white bg-buttoncolor rounded-2xl text-xl">Confirm Order</button>
      </div>
    </Container>
  );
}

export default CartPage;
