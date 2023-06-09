"use client";
import { useMemo, useState } from "react";
import Container from "../components/Container";
import { Order } from "../types";
import {
  generateDummyOrder,
  generateDummyProduct,
} from "../libs/generateDummyData";
import CartCard from "./CartCard";

function CartPage() {
  const getOrders = () => {
    let result: Order[] = [];
    for (let i = 0; i < 5; i++) {
      let randomProduct = generateDummyProduct();
      result.push(generateDummyOrder(randomProduct));
    }
    return result;
  };
  const [orders, setOrders] = useState(getOrders());

  const removeOrders = (index: number) => {
    setOrders((orders) => orders.filter((_, i) => i !== index));
  };
  const totalPrice = orders
    .map((order) => order.total * order.quantity)
    .reduce((a, b) => a + b, 0);
  const deliveryFee = Math.floor(Math.random() * 100) + 100;
  return (
    <Container className="my-8">
      <p className="my-4 text-xl font-semibold underline">Check Out</p>
      {orders.map((order, index) => (
        <CartCard
          key={index}
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
    </Container>
  );
}

export default CartPage;
