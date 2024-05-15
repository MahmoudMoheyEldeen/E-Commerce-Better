import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product, Rating } from '../../interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  ProductId: string = ' ';
  product: Product = {
    sold: 0,
    images: [],
    subcategory: [],
    ratingsQuantity: 0,
    _id: '',
    title: '',
    slug: '',
    description: '',
    quantity: 0,
    price: 0,
    imageCover: '',
    category: {
      name: '',
    },
    brand: '',
    ratingsAverage: 0,
    createdAt: '',
    updatedAt: '',
    id: '',
    priceAfterDiscount: 0,
    availableColors: [],
  };

  singleProduct: {} = {};
  responsiveOptions: any[] | undefined;

  images: string[] = [
    'assets/images/fragrances.jpg',
    'assets/images/bags.jpeg',
    'assets/images/body.jpeg',
    'assets/images/cars.jpeg',
    'assets/images/diapers.jpeg',
    'assets/images/fragrances.jpg',
    'assets/images/furniture.jpeg',
  ];

  constructor(
    private _productService: ProductsService,
    private _cartService: CartService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProductDetails();

    this.responsiveOptions = [
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
  }

  getProductDetails() {
    this._route.params.subscribe((params) => {
      this.ProductId = params['id'];
      console.log('this is id ', this.ProductId);
    });
    this._productService.getSpecificProduct(this.ProductId).subscribe({
      next: (resp) => {
        this.product = resp.data;
        console.log('this is specific product ', this.product);
      },
    });
  }

  addProductToCart() {
    this._route.params.subscribe((params) => {
      this.ProductId = params['id'];
      console.log('this is id for post ', this.ProductId);
      // this._cartService.numOfCartItems.next(params.numOfCartItems);
    });
    this._cartService.postProductToCart(this.ProductId).subscribe({
      next: (resp) => {
        this._cartService.numOfCartItems.next(resp.numOfCartItems);

        console.log(resp);
      },
    });
  }
  addProductToWishList() {
    this._route.params.subscribe((params) => {
      this.ProductId = params['id'];
      console.log('this is id for post ', this.ProductId);
      // this._cartService.numOfCartItems.next(params.numOfCartItems);
    });
    this._cartService.postProductToWishList(this.ProductId).subscribe({
      next: (resp) => {
        this._cartService.numOfWishListItems.next(resp.count);

        console.log(resp);
      },
    });
  }
}
