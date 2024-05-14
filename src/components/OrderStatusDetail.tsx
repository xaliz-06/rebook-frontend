import { Order } from "@/types";
import { Separator } from "./ui/separator";

type Props = {
  order: Order;
};

const OrderStatusDetail = ({ order }: Props) => {
  return (
    <div className="space-y-5 text-white">
      <div className="flex flex-col text-sm md:text-base">
        <span className="font-bold">Delivering to: </span>
        <span>{order.deliveryDetails.name}</span>
        <span>
          {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
        </span>
      </div>
      <div className="flex flex-col text-sm md:text-base">
        <span className="font-bold">Your Order</span>
        <ul className="mt-4 p-5 bg-slate-800 rounded-lg">
          {order.cartItems.map((item, index) => (
            <li key={index} className="flex justify-between ">
              <span>{item.name}</span>
              <span>{item.condition}</span>
            </li>
          ))}
        </ul>
      </div>
      <Separator />
      <div className="flex flex-col text-sm md:text-base">
        <span className="font-bold">Total</span>
        <span className=" font-bold text-xl md:text-2xl text-blue-500">
          INR {(order.totalAmount / 100).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default OrderStatusDetail;
