import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Loader2 } from "lucide-react";

const OrderPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return (
      <div className="p-4 mx-auto my-2 text-blue-500 flex flex-col justify-center items-center gap-4">
        <span className="text-3xl">Loading...</span>
        <Loader2 className="w-10 h-10" />
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="p-4 mx-auto my-2 text-white flex flex-col justify-center items-center gap-4">
        <span className="text-3xl">No orders found</span>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {orders.map((order, index) => (
        <div
          className="space-y-10 bg-slate-900 
          p-4 md:p-6 lg:p-10 rounded-lg"
          key={index}
        >
          <OrderStatusHeader order={order} />
          <div className="grid gap-4 md:gap-10 md:grid-cols-2">
            <OrderStatusDetail order={order} />
            <AspectRatio ratio={16 / 5} className="bg-slate-800 rounded-md">
              <img
                src={order.store.imageUrl}
                alt="order"
                className="object-cover rounded-md h-full w-full"
              />
            </AspectRatio>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderPage;
