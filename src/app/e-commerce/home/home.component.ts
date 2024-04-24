import { Component, OnInit, afterNextRender } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Category, Product } from '../../interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _productService: ProductsService,
    private _router: Router
  ) {}
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
  productID: number = 0;

  categories: Category[] = [];
  rowsPerPageOptions: number[] = [];
  products: Product[] = [];
  dropdownCategTerm: string = 'All';

  ngOnInit(): void {
    this.getProductLimit(5);
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
        this.products = resp;
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
}
