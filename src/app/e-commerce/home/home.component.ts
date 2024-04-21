import { Component, OnInit, afterNextRender } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _productService: ProductsService) {}
  responsiveOptions: any[] | undefined;
  categories: any[] = [
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

  //     name: 'GC Bag',
  //     image: 'assets/images/bag.jpeg',
  //     price: '1200EGP',
  //     category: 'Women Bags',
  //     reviews: '5',
  //     status: 'INSTOCK',
  //     rating: '3',
  //   },
  //   {
  //     name: 'Woman Bracelete MX',
  //     image: 'assets/images/brac.jpeg',
  //     price: '25000EGP',
  //     category: 'Women Bags',
  //     reviews: '5',
  //     status: 'LOWSTOCK',
  //     rating: '4',
  //   },
  //   {
  //     name: 'Nike Shoes',
  //     image: 'assets/images/shoes.jpeg',

  //     price: '5000EGP',
  //     category: 'Men Wear',
  //     reviews: '5',
  //     status: 'OUTOFSTOCK',
  //     rating: '5',
  //   },
  //   {
  //     name: 'Watch Quartz',
  //     image: 'assets/images/watchccc.jpeg',
  //     price: '4300EGP',
  //     category: 'Men Accessories',
  //     reviews: '5',
  //     status: 'INSTOCK',
  //     rating: '3',
  //   },
  //   {
  //     name: 'Tie GC',
  //     image: 'assets/images/tie.jpeg',
  //     price: '1200EGP',
  //     category: 'Men Suits',
  //     reviews: '5',
  //     status: 'LOWSTOCK',
  //     rating: '1',
  //   },
  //   {
  //     name: 'Watch',
  //     image: 'assets/images/watch.jpg',

  //     price: '22000EGP',
  //     category: 'Women Bags',
  //     reviews: '5',
  //     status: 'INSTOCK',
  //     rating: '5',
  //   },
  //   {
  //     name: 'Shoes',
  //     image: 'assets/images/shoesss.jpeg',

  //     price: '7000EGP',
  //     category: 'Shoes Men',
  //     reviews: '5',
  //     status: 'OUTOFSTOCK',
  //     rating: '2',
  //   },
  // ];
  products: Product[] = [];

  ngOnInit(): void {
    this.getAllProduct();
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
}
