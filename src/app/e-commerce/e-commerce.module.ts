import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    HomeComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ECommerceRoutingModule
  ]
})
export class ECommerceModule { }