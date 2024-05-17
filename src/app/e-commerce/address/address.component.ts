import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from 'src/app/services/payment.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  cartId: string = '';

  constructor(
    private _payService: PaymentService,
    private _activateRoute: ActivatedRoute,
    private _cartService: CartService
  ) {}
  ngOnInit(): void {}

  shippingAddress: FormGroup = new FormGroup({
    details: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
  });

  submitShippingAddress() {
    // console.log(this.shippingAddress.value);
    // console.log('this is cart id', this.cartId);

    this._activateRoute.params.subscribe((params) => {
      console.log('this owner cart ', params);
      this.cartId = params['id'];
      console.log('this another owner cart ', this.cartId);
    });

    this._payService
      .checkout(this.cartId, this.shippingAddress.value)
      .subscribe({
        next: (response) => {
          console.log('this is resp', response);

          if (response.status == 'success') {
            window.location.href = response.session.url;
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
