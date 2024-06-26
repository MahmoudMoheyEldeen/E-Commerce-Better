import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CartProduct, wishListProduct } from 'src/app/interfaces/cart-product';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { wishDetails } from '../../interfaces/cart-product';
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit {
  constructor(
    private _productService: ProductsService,
    private _cartService: CartService
  ) {}
  ngOnInit(): void {
    this.getLoggedUserWishList();
  }

  quantity: number = 1;
  totalPrice: number = 0;
  noProducts: boolean = true;
  productID: string = '';
  products: wishListProduct = {
    status: '',
    count: 0,
    data: [
      {
        sold: 0,
        images: [''],
        subcategory: [
          {
            _id: '',
            name: '',
            slug: '',
            image: '',
            category: '',
          },
        ],
        ratingsQuantity: 0,
        _id: '',
        title: '',
        slug: '',
        description: '',
        quantity: 0,
        price: 0,
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
      },
    ],
  };
  items: any = []; // Your array of wishlist items
  currentPage = 1;
  itemsPerPage = 4;

  cards: any = [];
  images: string[] = [];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  getLoggedUserWishList() {
    this._cartService.getLoggedUserWishList().subscribe({
      next: (resp) => {
        this.products = resp;
        console.log('this is my cart', this.products.count);
        this._cartService.numOfWishListItems.next(resp.count);
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

  removeProduct(productID: string) {
    this._cartService.deleteSpecificProductinWishList(productID).subscribe({
      next: (resp) => {
        this.products.data = resp.data;
        console.log('this is resp', resp);
        this._cartService.numOfWishListItems.next(resp.data.length);
        this.getLoggedUserWishList();
        console.log(resp);
      },
    });
  }
}
