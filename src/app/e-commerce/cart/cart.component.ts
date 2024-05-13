import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { CartProduct, Data } from '../../interfaces/cart-product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  quantity: number = 1;
  totalPrice: number = 0;
  noProducts: boolean = true;
  productID: string = '';
  products: CartProduct = {
    status: '',
    numOfCartItems: 0,
    data: {
      _id: '',
      cartOwner: '',
      products: [
        {
          count: 0,
          _id: '',
          product: {
            subcategory: [
              {
                _id: '',
                name: '',
                slug: '',
                image: '',
                category: '',
              },
            ],
            _id: '',
            title: '',
            quantity: 0,
            imageCover: '',
            category: {
              _id: '',
              name: '',
              slug: '',
              image: '',
              category: '',
            },
            brand: {
              _id: '',
              name: '',
              slug: '',
              image: '',
              category: '',
            },
            ratingsAverage: 0,
            id: '',
          },
          price: 0,
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
      __v: 0,
      totalCartPrice: 0,
    },
  };
  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this.getLoggedUserCart();
  }

  getLoggedUserCart() {
    this._cartService.getLoggedUserCart().subscribe({
      next: (resp) => {
        this.products = resp;
        this._cartService.numOfCartItems.next(this.products.numOfCartItems);
        this.totalPrice = resp.data.totalCartPrice;
        // console.log('this is my cart', this.products);
      },
      error: (err) => {
        if (err.statusText == 'Not Found') {
          console.log('n000000000 products');
        }
      },
    });
  }
  removeLoggedUserCart() {
    this._cartService.removeLoggedUserCart().subscribe({
      next: (resp) => {
        if (resp.message == 'success') {
          console.log('removed successfuly');
          this.products.data.products = [];
          this.products.data.totalCartPrice = 0;
          this.products.data.products.length = 0;
          this._cartService.numOfCartItems.next(resp.numOfCartItems);
          console.log(resp);
          this.getLoggedUserCart();
        }
      },
    });
  }

  updateProductCount(productID: string, count: number) {
    this._cartService.UpdateProductQuantity(productID, count).subscribe({
      next: (res) => {
        this.products.data.products = res.data.products;
        this.totalPrice = res.data.totalCartPrice;

        console.log('updated', this.products.data.products);
        console.log(res);
      },
    });
  }

  // updateCartQuantity(productId: string, count: number) {
  //   this._cartService.UpdateProductQuantity(productId, count).subscribe({
  //     next: (response) => {
  //       this.products.data.products = response.data.products;
  //       this.quantity = response.numOfCartItems;
  //       this.totalPrice = response.data.totalCartPrice;
  //       console.log(response);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }
}
