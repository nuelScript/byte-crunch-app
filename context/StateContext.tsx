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
  // toggleCartItemQuantity: (id: number, value: string) => void;
  onRemove: (product: any) => void;
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
  // toggleCartItemQuantity: () => {},
  onRemove: () => {},
});

export const StateContext = ({ children }: StateContextProps) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<any>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const [qty, setQty] = useState(1);

  let foundProduct: any;
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

  const onRemove = (product: any) => {
    foundProduct = cartItems.find((item: any) => item._id === product._id);
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantity(
      (prevTotalQuantity) => prevTotalQuantity - foundProduct.quantity
    );
    setCartItems(cartItems.filter((item: any) => item._id !== product._id));
  };

  // const toggleCartItemQuantity = (id: number, value: string) => {
  //   foundProduct = cartItems.find((item: any) => item._id === id);
  //   index = cartItems.findIndex((product: any) => product._id === id);
  //   const newCartItems = cartItems.splice(index, 1);

  //   if (value === "inc") {
  //     setCartItems([
  //       ...newCartItems,
  //       { ...foundProduct, quantity: foundProduct.quantity + 1 },
  //     ]);
  //     setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
  //     setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + 1);
  //   } else if (value === "dec") {
  //     if (foundProduct.quantity > 1) {
  //       setCartItems([
  //         ...newCartItems,
  //         { ...foundProduct, quantity: foundProduct.quantity - 1 },
  //       ]);
  //       setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
  //       setTotalQuantity((prevTotalQuantity) => prevTotalQuantity - 1);
  //     }
  //   }
  // };

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
    // toggleCartItemQuantity,
    onRemove,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useStateContext = () => useContext(UserContext);
