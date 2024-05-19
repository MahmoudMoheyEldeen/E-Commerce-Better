import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl: string = 'https://fakestoreapi.com';
  routeBaseUrl: string = 'https://ecommerce.routemisr.com';
  allWishlistItems: any = [];

  constructor(private _httpClient: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this._httpClient.get(`${this.routeBaseUrl}/api/v1/products`);
  }
  getAllCategories(): Observable<any> {
    return this._httpClient.get(`${this.baseUrl}/products/categories`);
  }
  getProductLimit(limit: number): Observable<any> {
    return this._httpClient.get(`${this.baseUrl}/products?limit=${limit}`);
  }

  getSpecificProduct(id: any): Observable<any> {
    return this._httpClient.get(`${this.routeBaseUrl}/api/v1/products/${id}`);
  }
  postProductToWishList(productID: any): Observable<any> {
    return this._httpClient.post(
      `${this.routeBaseUrl}/api/v1/wishlist`,
      productID
    );
  }

  getLoggedUserWishList(): Observable<any> {
    return this._httpClient.get(`${this.routeBaseUrl}/api/v1/wishlist`);
  }
}
