import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private _httpClient: HttpClient) {}

  routeBaseUrl: string = 'https://ecommerce.routemisr.com';
  headers = { token: localStorage.getItem('userToken') || '' };

  checkout(cartID: string, shippingAddress: any): Observable<any> {
    return this._httpClient.post(
      `${this.routeBaseUrl}/api/v1/orders/checkout-session/${cartID}?url=http://localhost:4200`,
      { shippingAddress: shippingAddress }
    );
  }
}
