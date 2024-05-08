import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private _authService: AuthService) {}

  isRegistered: boolean = true;

  ngOnInit(): void {}

  registerForm = new FormGroup({
    name: new FormControl(null, {
      validators: [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ],
    }),
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
    rePassword: new FormControl(null, {
      validators: [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern(
          /^(?=.*[A-Z])(?=.*[\d\w])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
        ),
      ],
    }),
    phone: new FormControl(null, {
      validators: [
        Validators.required,
        Validators.pattern(/^01[0125][0-9]{8}$/),
      ],
    }),
  });

  // registerForm = new FormGroup({
  //   name: new FormControl(null, { validators: Validators.required }),
  //   userName: new FormControl(null, { validators: Validators.required }),
  //   email: new FormControl(null, { validators: Validators.required }),
  //   password: new FormControl(null, { validators: Validators.required }),
  //   rePassword: new FormControl(null, { validators: Validators.required }),
  // });

  submitRegisterForm() {
    this._authService.register(this.registerForm.value).subscribe({
      next: (resp) => {
        console.log('success');
        console.log(resp);
      },

      error: (err) => {
        console.log('this is error here');
      },
    });

    // if (this.registerForm.valid) {
    //   this._authService.register(this.registerForm.value).subscribe({
    //     next: (resp) => {
    //       console.log('success');
    //     },

    //     error: (err) => {
    //       console.log('this is error here');
    //     },
    //   });
    // } else {
    //   console.log('your registerform not valid');
    //   console.log(this.registerForm.value);
    // }
  }
}
