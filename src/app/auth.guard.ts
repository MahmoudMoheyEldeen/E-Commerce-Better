import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './services/auth.service';
AuthService;
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this._authService.isLogged()) {
      return true;
    } else {
      // Redirect the user to the login page and store the attempted URL for redirecting after login
      console.log('bkhhhhhhhhhhhhhhhhhh');
      return false;
    }
  }
}
