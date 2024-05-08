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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [DialogService],
})
export class LoginComponent implements OnInit {
  @Output() closeDialog = new EventEmitter<void>();
  isRegistered: boolean = true;
  constructor(private _el: ElementRef, private _route: Router) {}

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
    this.closeDialog.emit();
    this._route.navigateByUrl('/E-Commerce/cart');
  }
}
