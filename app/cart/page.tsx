import { useMemo } from "react";
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
  return (
    <Container className="my-8">
      <p className="my-4 text-xl font-semibold underline">Check Out</p>
      {getOrders().map((order, index) => (
        <CartCard key={index} order={order} />
      ))}
    </Container>
  );
}

export default CartPage;
