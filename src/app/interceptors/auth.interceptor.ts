import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let userToken = localStorage.getItem('authToken');

    if (userToken) {
      let newReq = request.clone({
        headers: request.headers.set('token', userToken),
      });
      return next.handle(newReq);
    }
    return next.handle(request);
  }
}
