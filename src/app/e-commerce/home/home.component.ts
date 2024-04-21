import { Component, OnInit, afterNextRender } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Category, Product } from '../../interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _productService: ProductsService) {}
  responsiveOptions: any[] | undefined;
  categories: Category[] = [];
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
}
