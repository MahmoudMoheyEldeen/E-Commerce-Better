import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit {
  products: Product[] = [];
  items: any = []; // Your array of wishlist items
  currentPage = 1;
  itemsPerPage = 4;

  constructor(private _productService: ProductsService) {
    this.products = this.loadItems(); // Load your items from local storage or another source
  }
  ngOnInit(): void {
    this.getWishListProducts();
    this.getAllProduct();
  }

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

  getAllProduct() {
    this._productService.getAllProducts().subscribe({
      next: (resp) => {
        this.products = resp;
        // this.products.map((x) => this.images.push(x.image));
        // console.log(this.images);
      },
      error: (error) => {
        console.log('error');
      },
    });
  }

  loadItems(): Product[] {
    // This should load all items from a local source e.g., localStorage
    // Example:
    // return JSON.parse(localStorage.getItem('wishlistItems')) || [];
    return this.products;
  }

  getWishListProducts() {
    this._productService.getLoggedUserWishList().subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
