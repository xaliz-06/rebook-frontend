import { Store } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useCreateMyStore = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyStoreRequest = async (
    storeFormData: FormData
  ): Promise<Store> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/store`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: storeFormData,
    });

    if (!response.ok) {
      throw new Error("Failed to create store");
    }

    return response.json();
  };

  const {
    mutate: createStore,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createMyStoreRequest);

  if (isSuccess) {
    toast.success("Store created!");
  }

  if (error) {
    toast.error("Unable to update store!");
  }

  return { createStore, isLoading };
};

export const useGetMyStore = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyStoreRequest = async (): Promise<Store> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/store`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status === 404) {
      throw new Error("No Existing Store Found");
    }

    if (!response.ok) {
      throw new Error("Failed to get store");
    }

    return response.json();
  };

  const {
    data: store,
    isLoading,
    error,
  } = useQuery("fetchMyStore", getMyStoreRequest);

  if (error) {
    toast.error(error.toString());
  }

  return { store, isLoading };
};

export const useUpdateMyStore = () => {
  const { getAccessTokenSilently } = useAuth0();
  const updateStoreRequest = async (
    storeFormData: FormData
  ): Promise<Store> => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/store`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: storeFormData,
    });
    if (!response.ok) {
      throw new Error("Failed to update store");
    }
    return response.json();
  };

  const {
    mutate: updateStore,
    isLoading,
    isSuccess,
    error,
  } = useMutation(updateStoreRequest);

  if (isSuccess) {
    toast.success("Store updated!");
  }

  if (error) {
    toast.error("Unable to update store!");
  }

  return { updateStore, isLoading };
};
