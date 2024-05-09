import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private routeBaseUrl: string = 'https://ecommerce.routemisr.com';

  constructor(private _httpclient: HttpClient) {}

  isLogged(): boolean {
    if (localStorage.getItem('authToken')) {
      return true;
    } else {
      return false;
    }
  }

  register(registerform: any): Observable<any> {
    return this._httpclient.post(
      `${this.routeBaseUrl}/api/v1/auth/signup`,
      registerform
    );
  }

  logIn(loginForm: any): Observable<any> {
    return this._httpclient.post(
      `${this.routeBaseUrl}/api/v1/auth/signin`,
      loginForm
    );
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
  removeToken(): void {
    localStorage.removeItem('authToken');
  }
}
