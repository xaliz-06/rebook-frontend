export type User = {
  _id: string;
  email: string;
  name: string;
  addressLine1: string;
  city: string;
  country: string;
};

export type Book = {
  _id: string;
  name: string;
  price: string;
  author: string;
  condition: string;
  releaseYear: string;
  genre: string[];
};

export type Store = {
  _id: string;
  sellerName: string;
  city: string;
  country: string;
  deliveryPrice: string;
  interestedGenres: string[];
  availableBooks: Book[];
  imageUrl: string;
  user: string;
  lastUpdated: string;
};

export type StoreSearchResponse = {
  data: Store[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
};

export type Order = {
  _id: string;
  store: Store;
  user: User;
  cartItems: {
    bookId: string;
    name: string;
    condition: string;
  }[];
  deliveryDetails: {
    email: string;
    name: string;
    addressLine1: string;
    city: string;
    country: string;
  };
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
};

export type OrderStatus =
  | "placed"
  | "paid"
  | "inProgress"
  | "outForDelivery"
  | "delivered";
