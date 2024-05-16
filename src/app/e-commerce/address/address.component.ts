import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaymentService } from 'src/app/services/payment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent {
  constructor(
    private _payService: PaymentService,
    private _activateRoute: ActivatedRoute
  ) {}
  cartId: string = '';

  shippingAddress: FormGroup = new FormGroup({
    details: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
  });

  submitShippingAddress() {
    console.log(this.shippingAddress.value);
    this._activateRoute.params.subscribe((params) => {
      this.cartId = params['id'];
      console.log(this.cartId);
    });
  }
}
