import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  baseUrl: string = 'https://ecommerce.routemisr.com';
  headers = { token: localStorage.getItem('authToken') || '' };
  constructor(private _httpClient: HttpClient) {}

  checkout(cartId: string, shippingAddress: any): Observable<any> {
    return this._httpClient.post(
      `${this.baseUrl}/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200/E-Commerce/home`,
      { shippingAddress: shippingAddress }
    );
  }
}
