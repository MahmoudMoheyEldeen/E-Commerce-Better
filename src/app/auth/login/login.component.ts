import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { RegisterComponent } from '../register/register.component';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Product } from '../../interfaces/product';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Token } from '@angular/compiler';
import { jwtDecode } from 'jwt-decode';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [DialogService],
})
export class LoginComponent implements OnInit {
  @Output() closeDialog = new EventEmitter<void>();
  isRegistered: boolean = true;
  username: any = {
    id: '',
    name: '',
    role: '',
    iat: 0,
    exp: 0,
  };
  userName: string = '';
  userToken: any;

  loginForm = new FormGroup({
    email: new FormControl(null, {
      validators: [Validators.required, Validators.email],
    }),

    password: new FormControl(null, {
      validators: [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern(
          /^(?=.*[A-Z])(?=.*[\d\w])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
        ),
      ],
    }),
  });
  constructor(
    private _cartService: CartService,
    private _el: ElementRef,
    private _route: Router,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isClicked();
  }

  isClicked() {
    // Get the button element with the class 'login'
    const button = this._el.nativeElement.querySelector('.clickhere');
    button.innerHTML = 'Register';
    // Check if the button exists
    if (button) {
      // Add a click event listener to the button
      button.addEventListener('click', () => {
        // Toggle the isRegistered boolean when the button is clicked
        this.isRegistered = !this.isRegistered;
        if (button.innerHTML == 'Register') {
          button.innerHTML = 'Login';
        } else if (button.innerHTML == 'Login') {
          button.innerHTML = 'Register';
        }
      });
    }
  }

  signIn() {
    this._authService.logIn(this.loginForm.value).subscribe({
      next: (resp) => {
        console.log('login Success', this.loginForm.value);
        console.log('this is token', resp.token);
        localStorage.setItem('authToken', resp.token);
        console.log('this is decode of token', this._authService.decodeToken());
        this.userName = this._authService.decodeToken().name;
        console.log('this is the name of user', this.userName);
        this._cartService.getLoggedUserWishList().subscribe({
          next: (resp) => {
            console.log('this resp from constructor cart service', resp);
            this._cartService.numOfWishListItems.next(resp.count);
          },
        });

        this._cartService.getLoggedUserCart().subscribe({
          next: (resp) => {
            console.log('this resp from constructor cart service', resp);
            this._cartService.numOfCartItems.next(resp.numOfCartItems);
          },
        });
        this.closeDialog.emit();
        this._route.navigateByUrl('/E-Commerce/home');
      },
      error: (err) => {
        console.log('error', err);
      },
    });
  }
}
