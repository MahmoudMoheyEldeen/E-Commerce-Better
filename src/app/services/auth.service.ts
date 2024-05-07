import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private routeBaseUrl: string = 'https://ecommerce.routemisr.com';
  constructor(private _httpclient: HttpClient) {}

  register(registerform: any): Observable<any> {
    return this._httpclient.post(
      `${this.routeBaseUrl}/api/v1/auth/signup`,
      registerform
    );
  }
}
