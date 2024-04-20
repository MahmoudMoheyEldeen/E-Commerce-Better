import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
  ngOnInit(): void {
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
}
