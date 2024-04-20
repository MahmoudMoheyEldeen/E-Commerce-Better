import { Component, ElementRef, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [DialogService],
})
export class LoginComponent implements OnInit {
  constructor(private _el: ElementRef) {}

  ngOnInit(): void {
    this.isClicked();
  }

  isRegistered: boolean = true;

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
}
