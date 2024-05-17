import { Component, OnInit, afterNextRender } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _authService: AuthService,
    private messageService: MessageService,
    private _productService: ProductsService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _cartService: CartService
  ) {}
  ProductId: string = '';
  responsiveOptions: any[] | undefined;
  categoriesImages: any[] = [
    {
      name: 'Fragrances',
      Image: 'assets/images/fragrances.jpg',
    },
    {
      name: 'Bags & Luggage',

      Image: 'assets/images/bags.jpeg',
    },
    {
      name: 'Personal Care',
      Image: 'assets/images/body.jpeg',
    },
    {
      name: 'Automotives',
      Image: 'assets/images/cars.jpeg',
    },
    {
      name: 'Diapers',
      Image: 'assets/images/diapers.jpeg',
    },
    {
      name: 'Fragnances',
      Image: 'assets/images/fragrances.jpg',
    },
    {
      name: 'Furniture',
      Image: 'assets/images/furniture.jpeg',
    },
    {
      name: 'Hair Care',
      Image: 'assets/images/hair.jpeg',
    },
    {
      name: 'Health',
      Image: 'assets/images/health.jpeg',
    },
    {
      name: 'Home Tools',
      Image: 'assets/images/hometools.jpeg',
    },
    {
      name: 'Kitchen Tools',
      Image: 'assets/images/kitchen.jpeg',
    },
    {
      name: 'Fragrances',
      Image: 'assets/images/fragrances.jpg',
    },
    {
      name: 'Bags & Luggage',

      Image: 'assets/images/bags.jpeg',
    },
    {
      name: 'Personal Care',
      Image: 'assets/images/body.jpeg',
    },
    {
      name: 'Automotives',
      Image: 'assets/images/cars.jpeg',
    },
    {
      name: 'Diapers',
      Image: 'assets/images/diapers.jpeg',
    },
    {
      name: 'Fragnances',
      Image: 'assets/images/fragrances.jpg',
    },
    {
      name: 'Furniture',
      Image: 'assets/images/furniture.jpeg',
    },
    {
      name: 'Hair Care',
      Image: 'assets/images/hair.jpeg',
    },
    {
      name: 'Health',
      Image: 'assets/images/health.jpeg',
    },
    {
      name: 'Home Tools',
      Image: 'assets/images/hometools.jpeg',
    },
    {
      name: 'Kitchen Tools',
      Image: 'assets/images/kitchen.jpeg',
    },
  ];
  productID: string = '';
  // ProductIdArrays: [] = [];

  categories: string = '';
  rowsPerPageOptions: number[] = [];
  products: Product[] = [];
  dropdownCategTerm: string = 'All';

  ngOnInit(): void {
    this.getAllProduct();
    this.getAllCategories();
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
  getSeverity(status: string): any {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
  }
  getAllProduct() {
    this._productService.getAllProducts().subscribe({
      next: (resp) => {
        this.products = resp.data;
        // this.products.map((x) => (this.productID = x._id));
        // console.log('this is product id ', this.productID);
        console.log('route product', this.products);
      },
      error: (error) => {
        console.log('error');
      },
    });
  }
  getAllCategories() {
    this._productService.getAllCategories().subscribe({
      next: (resp) => {
        this.categories = resp;
      },
      error: (error) => {
        console.log('error');
      },
    });
  }

  getProductLimit(limit: number) {
    this._productService.getProductLimit(limit).subscribe({
      next: (resp) => {
        this.products = resp;
        console.log(this.products);
        this.rowsPerPageOptions = this.generateRowsPerPageOptions(limit);
      },
      error: (error) => {
        console.log('error');
      },
    });
  }

  generateRowsPerPageOptions(limit: number): number[] {
    // Generate rows per page options based on the limit
    return [limit, limit * 2, limit * 3];
  }

  addProductToCart(productId: string) {
    if (this._authService.isLogged()) {
      this._cartService.postProductToCart(productId).subscribe({
        next: (resp) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Successfully added to cart',
          });
          this._cartService.numOfCartItems.next(resp.numOfCartItems);

          console.log(resp);
        },
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Warning',
        detail: 'Please login',
      });
    }
  }

  addProductToWishList(productId: string) {
    this._cartService.postProductToWishList(productId).subscribe({
      next: (resp) => {
        console.log('length', resp.data.length);
        this._cartService.numOfWishListItems.next(resp.data.length);

        console.log(resp);
      },
    });
  }

  handleButtonClick(event: MouseEvent, productId: any) {
    event.stopPropagation();
    this.addProductToCart(productId);
  }

  IconhandleButtonClick(event: MouseEvent, productId: any) {
    event.stopPropagation();
    this.addProductToWishList(productId);
  }
}
