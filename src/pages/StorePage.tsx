import {
  useCreateMyStore,
  useGetMyStore,
  useUpdateMyStore,
} from "@/api/MyStoreApi";
import ManageStoreForm from "@/forms/manage-store-form/ManageStoreForm";

function StorePage() {
  const { createStore, isLoading: isCreateLoading } = useCreateMyStore();
  const { updateStore, isLoading: isUpdateLoading } = useUpdateMyStore();
  const { store } = useGetMyStore();

  const isEditing = !!store;

  return (
    <ManageStoreForm
      onSave={isEditing ? updateStore : createStore}
      isLoading={isCreateLoading || isUpdateLoading}
      store={store}
    />
  );
}

export default StorePage;
