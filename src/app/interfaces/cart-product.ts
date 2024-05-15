export interface CartProduct {
  status: string;
  numOfCartItems: number;
  data: Data;
}

export interface Data {
  _id: string;
  cartOwner: string;
  products: ProductElement[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  totalCartPrice: number;
}

export interface ProductElement {
  count: number;
  _id: string;
  product: ProductProduct;
  price: number;
}

export interface ProductProduct {
  subcategory: Brand[];
  _id: string;
  title: string;
  quantity: number;
  imageCover: string;
  category: Brand;
  brand: Brand;
  ratingsAverage: number;
  id: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image?: string;
  category?: string;
}

export interface wishListProduct {
  status: string;
  count: number;
  data: wishDetails[];
}

export interface wishDetails {
  sold: number;
  images: string[];
  subcategory: Brand[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: Brand;
  brand: Brand;
}
