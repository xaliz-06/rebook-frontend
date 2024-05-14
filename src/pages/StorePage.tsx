import {
  useCreateMyStore,
  useGetMyStore,
  useGetMyStoreOrders,
  useUpdateMyStore,
} from "@/api/MyStoreApi";
import OrderItemCard from "@/components/OrderItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageStoreForm from "@/forms/manage-store-form/ManageStoreForm";

function StorePage() {
  const { createStore, isLoading: isCreateLoading } = useCreateMyStore();
  const { updateStore, isLoading: isUpdateLoading } = useUpdateMyStore();
  const { store } = useGetMyStore();

  const { orders, error } = useGetMyStoreOrders();

  const isEditing = !!store;

  return (
    <Tabs defaultValue="orders" className="p-2">
      <TabsList className="bg-slate-900 text-blue-500 p-2">
        <TabsTrigger
          value="orders"
          className="data-[state=active]:bg-slate-700 data-[state=active]:text-white"
        >
          Orders
        </TabsTrigger>
        <TabsTrigger
          value="manage-store"
          className="data-[state=active]:bg-slate-700 data-[state=active]:text-white"
        >
          Manage Store
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="orders"
        className="space-y-5 bg-slate-800 lg:m-6 lg:p-5 md:m-1 md:py-4 md:px-2 m-1 py-4 text-white rounded-lg"
      >
        {error ? (
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-blue-500">{orders?.length}</span> active
            orders
          </h2>
        ) : (
          <h2 className="text-2xl md:text-3xl font-bold">
            Unable to get your store. Please check if you have created a store
            or try again later.
          </h2>
        )}
        {orders?.map((order, index) => (
          <OrderItemCard key={index} order={order} />
        ))}
      </TabsContent>
      <TabsContent value="manage-store" className="space-y-5 pg-10 rounded-lg">
        <ManageStoreForm
          onSave={isEditing ? updateStore : createStore}
          isLoading={isCreateLoading || isUpdateLoading}
          store={store}
        />
      </TabsContent>
    </Tabs>
  );
}

export default StorePage;
