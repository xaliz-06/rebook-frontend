import { CartItem } from "@/pages/DetailPage";
import { Store } from "@/types";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Trash } from "lucide-react";

type Props = {
  store: Store;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
};

const OrderSummary = ({ store, cartItems, removeFromCart }: Props) => {
  const getTotalCost = () => {
    const totalInPaise = cartItems.reduce(
      (total, cartItem) => total + parseInt(cartItem.price),
      0
    );
    const totalCost = totalInPaise + parseInt(store.deliveryPrice);

    return (totalCost / 100).toFixed(2);
  };

  return (
    <>
      <CardHeader className="text-lg md:text-2xl lg:text-2xl font-bold tracking-tight ">
        <CardTitle className="font-bold tracking-tighter text-white flex flex-row md:flex-col md:gap-2 lg:flex-row lg:gap-0 justify-between items-center md:items-start lg:items-center">
          <span>Your Order</span>
          <span className="text-blue-500 font-bold">INR {getTotalCost()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5 text-white">
        {cartItems.map((item, index) => (
          <div
            className="flex flex-col gap-2 p-2 rounded-md bg-slate-800"
            key={index}
          >
            <div className="flex items-center justify-between">
              <span className="text-base md:text-sm lg:text-lg">
                {item.name}
              </span>
              <Trash
                className="cursor-pointer"
                size={20}
                color="red"
                onClick={() => removeFromCart(item)}
              />
            </div>

            <div className="flex items-center justify-between">
              <Badge variant="outline" className="mr-2 bg-white">
                {item.condition}
              </Badge>
              <span className="flex items-center gap-1 text-sm">
                INR {(parseInt(item.price) / 100).toFixed(2)}
              </span>
            </div>
          </div>
        ))}
        <Separator />
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>INR {(parseInt(store.deliveryPrice) / 100).toFixed(2)}</span>
        </div>
      </CardContent>
    </>
  );
};

export default OrderSummary;
