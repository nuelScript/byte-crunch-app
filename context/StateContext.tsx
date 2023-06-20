"use client";

import { Product } from "@/types/Product";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { toast } from "react-hot-toast";

interface StateContextProps {
  children: ReactNode;
}

interface StateContextValues {
  showCart: boolean;
  cartItems: any[];
  totalPrice: number;
  totalQuantity: number;
  qty: number;
  incQty: () => void;
  decQty: () => void;
  onAdd: (product: Product, quantity: number) => void;
  setShowCart: (value: boolean) => void;
}

export const UserContext = createContext<StateContextValues>({
  showCart: false,
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
  qty: 1,
  decQty: () => {},
  incQty: () => {},
  onAdd: () => {},
  setShowCart: () => {},
});

export const StateContext = ({ children }: StateContextProps) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<any>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  const onAdd = (product: any, quantity: number) => {
    const checkProductInCart = cartItems.find(
      (item: any) => item._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct: any) => {
        if (cartProduct._id === product._id) {
          return { ...cartProduct, quantity: cartProduct.quantity + quantity };
        }
        return cartProduct;
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to cart.`);
  };

  const toggleCartItemQuantity = (id: string, value: string) => {
    foundProduct = cartItems.find((item: any) => item._id === id);
    index = cartItems.findIndex((product: any) => product._id === id);

    if (value === "inc") {
      let newCartItems = [
        ...cartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ];
      setCartItems(newCartItems);
    } else if (value === "dec") {
      foundProduct.quantity--;
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  const value: StateContextValues = {
    showCart,
    setShowCart,
    cartItems,
    totalPrice,
    totalQuantity,
    qty,
    incQty,
    decQty,
    onAdd,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useStateContext = () => useContext(UserContext);
