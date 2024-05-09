import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private routeBaseUrl: string = 'https://ecommerce.routemisr.com';
  token: any;
  userTokenDecoded: any;
  userData: any = {
    id: '',
    name: '',
    role: '',
    iat: 0,
    exp: 0,
  };
  constructor(private _httpclient: HttpClient) {}

  isLogged(): boolean {
    if (localStorage.getItem('authToken')) {
      return true;
    } else {
      return false;
    }
  }

  decodeToken() {
    this.token = localStorage.getItem('authToken');
    try {
      this.userData = jwtDecode(this.token);
      return this.userData;
    } catch (error) {
      console.log('Error decoding token:', error);
      return null;
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
