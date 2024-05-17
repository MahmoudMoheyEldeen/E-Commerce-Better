export interface Orders {
  results: number;
  metadata: Metadata;
  data: Datum[];
}
export interface Datum {
  shippingAddress: ShippingAddress;
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: PaymentMethodType;
  isPaid: boolean;
  isDelivered: boolean;
  _id: string;
  user: User;
  cartItems: CartItem[];
  paidAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  id: number;
}
export enum PaymentMethodType {
  Card = 'card',
  Cash = 'cash',
}
export interface CartItem {
  count: number;
  _id: string;
  product: Product;
  price: number;
}

export interface Product {
  title: string;
  imageCover: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image?: string;
}

export interface ShippingAddress {
  details: string;
  phone: string;
  city: string;
}

export enum City {
  Assiut = 'Assiut',
  BaniSauef = 'Bani-sauef',
  CityAssiut = 'assiut',
  Empty = '',
  Gize = 'gize',
}

export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number;
}
