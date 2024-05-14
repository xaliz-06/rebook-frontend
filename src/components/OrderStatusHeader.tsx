import { Order } from "@/types";
import { Progress } from "./ui/progress";
import { ORDER_STATUS } from "@/config/order-status-config";

type Props = {
  order: Order;
};

const OrderStatusHeader = ({ order }: Props) => {
  const getExpectedDelivery = () => {
    const created = new Date(order.createdAt);

    created.setDate(created.getDate() + 6);

    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    };

    return created.toLocaleDateString("en-US", options);
  };

  const getOrderInfo = () => {
    return (
      ORDER_STATUS.find((status) => status.value === order.status) ||
      ORDER_STATUS[0]
    );
  };

  return (
    <>
      <h1 className="text-lg md:text-xl lg:text-4xl font-bold flex flex-col tracking-tighter gap-3 md:gap-3 lg:gap-5 md:flex-row md:justify-between text-white">
        <span>
          Order Status:{" "}
          <span className="text-blue-500">{getOrderInfo().label}</span>
        </span>
        <span>
          Expected by:{" "}
          <span className="text-blue-500">{getExpectedDelivery()}</span>
        </span>
      </h1>
      <Progress
        className="animate-pulse bg-white [&>*]:bg-blue-500"
        value={getOrderInfo().progressValue}
      />
    </>
  );
};

export default OrderStatusHeader;
