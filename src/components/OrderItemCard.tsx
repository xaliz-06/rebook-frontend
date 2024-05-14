import { Order, OrderStatus } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ORDER_STATUS } from "@/config/order-status-config";
import { useUpdateMyStoreOrderStatus } from "@/api/MyStoreApi";
import { useEffect, useState } from "react";

type Props = {
  order: Order;
};

const OrderItemCard = ({ order }: Props) => {
  const { updateStoreStatus, isLoading } = useUpdateMyStoreOrderStatus();

  const [status, setStatus] = useState<OrderStatus>(
    order.status as OrderStatus
  );

  useEffect(() => {
    setStatus(order.status as OrderStatus);
  }, [order.status]);

  const handleStatusChange = async (newStatus: OrderStatus) => {
    await updateStoreStatus({
      orderId: order._id as string,
      status: newStatus,
    });
    setStatus(newStatus);
  };

  const getDate = () => {
    const orderDateTime = new Date(order.createdAt);

    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    };

    return orderDateTime.toLocaleDateString("en-US", options);
  };

  return (
    <Card className="bg-slate-900 text-white border-slate-900">
      <CardHeader>
        <CardTitle className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between mb-3 text-sm md:text-sm lg:text-base">
          <div>
            <span className="text-blue-500">Customer Name:</span>
            <span className="ml-2 font-normal">
              {order.deliveryDetails.name}
            </span>
          </div>
          <div>
            <span className="text-blue-500">Delivery address:</span>
            <span className="ml-2 font-normal">
              {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
            </span>
          </div>
          <div>
            <span className="text-blue-500">Date:</span>
            <span className="ml-2 font-normal">{getDate()}</span>
          </div>
          <div>
            <span className="text-blue-500">Total Cost:</span>
            <span className="ml-2 font-normal">
              INR {(order.totalAmount / 100).toFixed(2)}
            </span>
          </div>
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row justify-between gap-6">
        <div className="flex flex-1 flex-col gap-2">
          {order.cartItems.map((cartItem, index) => (
            <div key={index} className="flex flex-row justify-between">
              <div className="flex justify-start items-center mr-5 max-w-[60%] md:max-w-[80%] text-sm md:text-base">
                {cartItem.name}
              </div>
              <Badge
                variant="outline"
                className="mr-2 bg-slate-200 max-w-[5rem] text-black"
              >
                {cartItem.condition}
              </Badge>
            </div>
          ))}
        </div>
        <div className="flex flex-1 flex-col space-y-1.5">
          <Label htmlFor="status">What is the status of this order?</Label>
          <Select
            onValueChange={(value) => handleStatusChange(value as OrderStatus)}
            disabled={isLoading}
            value={status}
          >
            <SelectTrigger id="status">
              <SelectValue placeholder="status" />
            </SelectTrigger>
            <SelectContent position="popper">
              {ORDER_STATUS.map((status, index) => (
                <SelectItem value={status.value} key={index}>
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderItemCard;
