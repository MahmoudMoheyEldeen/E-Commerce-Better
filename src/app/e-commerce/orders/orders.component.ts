import { Component, OnInit } from '@angular/core';
import { Datum, Orders, PaymentMethodType } from 'src/app/interfaces/orders';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from '../../interfaces/orders';
import { Product } from '../../interfaces/orders';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  constructor(private _cartService: CartService) {}
  ngOnInit(): void {
    this.getAllOrders();
  }
  product: Product = {
    title: '',
    imageCover: '',
  };
  cartItems: any = [];
  data: any = [];
  dataObject: Datum = {
    shippingAddress: {
      details: '',
      phone: '',
      city: '',
    },
    taxPrice: 0,
    shippingPrice: 0,
    totalOrderPrice: 0,
    paymentMethodType: PaymentMethodType.Card,
    isPaid: true,
    isDelivered: true,
    _id: '',
    user: {
      _id: '',
      name: '',
      email: '',
      phone: '',
    },
    cartItems: [
      {
        count: 0,
        _id: '',
        product: { title: '', imageCover: '' },
        price: 0,
      },
    ],
    paidAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 0,
  };

  cartObject = {
    count: 0,
    _id: '',
    product: this.product,
    price: 0,
  };

  products: Orders = {
    results: 0,
    metadata: {
      currentPage: 0,
      numberOfPages: 0,
      limit: 0,
      nextPage: 0,
    },
    data: [
      {
        shippingAddress: {
          details: '',
          phone: '',
          city: '',
        },
        taxPrice: 0,
        shippingPrice: 0,
        totalOrderPrice: 0,
        paymentMethodType: PaymentMethodType.Card,
        isPaid: true,
        isDelivered: true,
        _id: '',
        user: {
          _id: '',
          name: '',
          email: '',
          phone: '',
        },
        cartItems: [
          {
            count: 0,
            _id: '',
            product: { title: '', imageCover: '' },
            price: 0,
          },
        ],
        paidAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 0,
      },
    ],
  };
  getSeverity(status: string): any {
    switch (status) {
      case 'Delivered':
        return 'success';
      case 'inProgress':
        return 'info';
      case 'Wrong':
        return 'danger';
    }
  }

  getAllOrders() {
    this._cartService.getAllOrders().subscribe({
      next: (resp) => {
        this.products = resp;
        console.log('this is resp', resp);
        this.products.data.map((x) => {
          this.dataObject = x;
          x.cartItems.map((y) => {
            // this.data.push(x);
            this.cartObject = y;
          });
          this.data.push(this.dataObject);
          this.cartItems.push(this.cartObject);
        });
        console.log('this is cart items array ', this.cartItems);
        console.log('this is all data', this.data);
      },
    });
  }
}
