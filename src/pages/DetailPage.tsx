import { useCreateCheckoutSession } from "@/api/OrderApi";
import { useGetStore } from "@/api/StoreApi";
import BookItem from "@/components/BookItem";
import CheckoutButton from "@/components/CheckoutButton";
import OrderSummary from "@/components/OrderSummary";
import StoreInfo from "@/components/StoreInfo";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardFooter } from "@/components/ui/card";
import { UserFormData } from "@/forms/user-profile-form/UserProfileForm";
import { Book } from "@/types";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type CartItem = {
  _id: string;
  name: string;
  price: string;
  condition: string;
};

const DetailPage = () => {
  const { storeId } = useParams();
  const { store, isLoading } = useGetStore(storeId);
  const { createCheckoutSession, isLoading: isCheckoutLoading } =
    useCreateCheckoutSession();

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = sessionStorage.getItem(`cartItems-${storeId}`);

    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const addToCart = (bookItem: Book) => {
    console.log("triggered");
    setCartItems((prevState) => {
      const existingCartItem = prevState.find(
        (cartItem) => cartItem._id === bookItem._id
      );

      let updatedCartItems;

      if (existingCartItem) {
        console.log("already in");
        updatedCartItems = [...prevState];
      } else {
        updatedCartItems = [
          ...prevState,
          {
            _id: bookItem._id,
            name: bookItem.name,
            price: bookItem.price,
            condition: bookItem.condition,
          },
        ];
      }

      sessionStorage.setItem(
        `cartItems-${storeId}`,
        JSON.stringify(updatedCartItems)
      );

      return updatedCartItems;
    });
  };

  const removeFromCart = (cartItem: CartItem) => {
    setCartItems((prevState) => {
      const updatedCartItems = prevState.filter(
        (item) => cartItem._id !== item._id
      );
      sessionStorage.setItem(
        `cartItems-${storeId}`,
        JSON.stringify(updatedCartItems)
      );

      return updatedCartItems;
    });
  };

  const onCheckout = async (userFormData: UserFormData) => {
    console.log(cartItems);
    if (!store) {
      return;
    }
    const checkoutData = {
      cartItems: cartItems.map((cartItem) => ({
        bookId: cartItem._id,
        name: cartItem.name,
        condition: cartItem.condition,
      })),
      storeId: store._id,
      deliveryDetails: {
        name: userFormData.name,
        addressLine1: userFormData.addressLine1,
        city: userFormData.city,
        country: userFormData.country,
        email: userFormData.email as string,
      },
    };

    const data = await createCheckoutSession(checkoutData);

    window.location.href = data.url;
  };

  if (isLoading || !store) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      <AspectRatio ratio={16 / 6} className="px-5 rounded-lg bg-slate-600">
        <img
          src={store.imageUrl}
          alt="store_img"
          className="rounded-md object-cover h-full w-full"
        />
      </AspectRatio>
      <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32">
        <div className="flex flex-col gap-4">
          <StoreInfo store={store} />
          <span className="text-3xl font-bold tracking-tight text-white">
            Books
          </span>
          {store.availableBooks.map((book, index) => (
            <BookItem
              book={book}
              key={index}
              addToCart={() => addToCart(book)}
            />
          ))}
        </div>
        <div>
          <Card className="border-sla border-slate-600 bg-slate-900">
            <OrderSummary
              store={store}
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
            <CardFooter>
              <CheckoutButton
                disabled={cartItems.length === 0}
                onCheckout={onCheckout}
                isLoading={isCheckoutLoading}
              />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
