import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  ProductId: string = ' ';
  Product: Product[] = [];
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
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe((params) => {
      this.ProductId = params.get('id') || '0';
    });
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
    this._productService.getSpecificProduct(+this.ProductId).subscribe({
      next: (resp) => {
        this.Product = resp;
        console.log(this.Product);
      },
    });
  }
}
