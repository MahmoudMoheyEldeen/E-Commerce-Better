import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product, Rating } from '../../interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  ProductId: string = ' ';
  product: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
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
        this.product = resp;
        console.log('this is specific product ', this.product);
      },
    });
  }
}
