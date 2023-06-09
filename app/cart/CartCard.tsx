import { Order } from "../types";
import { TbCurrencyNaira } from "react-icons/tb";
import { MdOutlineCancel } from "react-icons/md";

interface CartInterface {
  order: Order;
  removeOrder: VoidFunction;
}
const CartCard = ({ order, removeOrder }: CartInterface) => {
  return (
    <div className="my-8 flex items-center border-b-2 border-dashed border-black py-4 ">
      <div className="h-full w-1/5 pe-4">
        <img
          className="rounded-xl"
          src={order.product.image}
          alt={order.product.name}
          width={240}
          height={320}
        />
      </div>
      <div className="flex h-full w-2/5">
        <div className="ps-10">
          <p className="my-2 w-fit text-xl font-semibold">
            {order.product.name}
          </p>
          <p className="my-2 font-light">Qty: {order.quantity}</p>
        </div>
      </div>
      <div className="h-full w-1/5 ">
        <span className="me-1">
          <TbCurrencyNaira className="inline" size={20} />
        </span>
        <span>{order.product.price}</span>
      </div>
      <div className="h-full w-1/5 ">
        <MdOutlineCancel
          className="mx-auto hover:cursor-pointer"
          onClick={removeOrder}
          size={25}
        />
      </div>
    </div>
  );
};

export default CartCard;
