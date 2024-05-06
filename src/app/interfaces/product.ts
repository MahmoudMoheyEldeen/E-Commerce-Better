export interface Product {
  sold: number;
  images: string[];
  subcategory: string[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: string;
  brand: string;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  id: string;
  priceAfterDiscount?: number;
  availableColors?: any[];
}

export interface Rating {
  rate: number;
  count: number;
}

// export enum Category {
//   Electronics = 'electronics',
//   Jewelery = 'jewelery',
//   MenSClothing = "men's clothing",
//   WomenSClothing = "women's clothing",
// }
