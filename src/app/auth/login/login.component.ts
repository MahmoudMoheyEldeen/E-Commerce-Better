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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [DialogService],
})
export class LoginComponent implements OnInit {
  @Output() closeDialog = new EventEmitter<void>();
  isRegistered: boolean = true;

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
        this.closeDialog.emit();
        this._route.navigateByUrl('/E-Commerce/cart');
      },
      error: (err) => {
        console.log('error', err);
      },
    });
  }
}
