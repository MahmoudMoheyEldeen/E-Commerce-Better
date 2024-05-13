import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  routeBaseUrl: string = 'https://ecommerce.routemisr.com';
  numOfCartItems = new BehaviorSubject(0);

  constructor(private _httpClient: HttpClient) {}

  postProductToCart(productID: any): Observable<any> {
    return this._httpClient.post(
      'https://ecommerce.routemisr.com/api/v1/cart',
      { productId: productID }
    );
  }

  getLoggedUserCart(): Observable<any> {
    return this._httpClient.get(`${this.routeBaseUrl}/api/v1/cart`);
  }

  removeLoggedUserCart(): Observable<any> {
    return this._httpClient.delete(`${this.routeBaseUrl}/api/v1/cart`);
  }
  UpdateProductQuantity(productID: string, proCount: number): Observable<any> {
    return this._httpClient.put(
      `${this.routeBaseUrl}/api/v1/cart/${productID}`,
      {
        count: proCount,
      }
    );
  }
}
