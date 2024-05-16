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
  numOfWishListItems = new BehaviorSubject(0);

  constructor(private _httpClient: HttpClient) {
    this.getLoggedUserWishList().subscribe({
      next: (resp) => {
        console.log('this resp from constructor cart service', resp);
        this.numOfWishListItems.next(resp.count);
      },
    });
    this.getLoggedUserCart().subscribe({
      next: (response) => {
        console.log(response);
        this.numOfCartItems.next(response.numOfCartItems);
        console.log(
          'this is the number of cart items come from service',
          this.numOfCartItems
        );
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

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

  deleteSpecificProductToCart(productID: any): Observable<any> {
    return this._httpClient.delete(
      `${this.routeBaseUrl}/api/v1/cart/${productID}`
    );
  }

  postProductToWishList(productID: any): Observable<any> {
    return this._httpClient.post(`${this.routeBaseUrl}/api/v1/wishlist`, {
      productId: productID,
    });
  }

  getLoggedUserWishList(): Observable<any> {
    return this._httpClient.get(`${this.routeBaseUrl}/api/v1/wishlist`);
  }

  // removeLoggedUserWishList(): Observable<any> {
  //   return this._httpClient.delete(`${this.routeBaseUrl}/api/v1/cart`);
  // }

  deleteSpecificProductinWishList(productID: any): Observable<any> {
    return this._httpClient.delete(
      `${this.routeBaseUrl}/api/v1/wishlist/${productID}`
    );
  }
}
