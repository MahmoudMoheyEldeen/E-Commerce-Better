import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl: string = 'https://fakestoreapi.com';
  constructor(private _httpClient: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this._httpClient.get(`${this.baseUrl}/products`);
  }
  getAllCategories(): Observable<any> {
    return this._httpClient.get(`${this.baseUrl}/products/categories`);
  }
  getProductLimit(limit: number): Observable<any> {
    return this._httpClient.get(`${this.baseUrl}/products?limit=${limit}`);
  }
}
