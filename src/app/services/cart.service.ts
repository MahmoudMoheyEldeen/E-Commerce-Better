import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  routeBaseUrl: string = 'https://ecommerce.routemisr.com';

  constructor(private _httpClient: HttpClient) {}

  addToCart(productID: any): Observable<any> {
    const data = {
      id: productID,
      Token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2IyY2MwODQ2MmFiMDJjNzFlNjhjYSIsIm5hbWUiOiJtb1NhbGFoIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MDg3OTU5NDgsImV4cCI6MTcxNjU3MTk0OH0.ih8ebpl4GT6gNM3Cb9nRLx8JTZakXyoSDo4WFyxMv0M',
    };
    return this._httpClient.post(
      'https://ecommerce.routemisr.com/api/v1/cart',
      data
    );
  }
}
