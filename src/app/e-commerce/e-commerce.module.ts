import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { ButtonModule } from 'primeng/button';
import { Paginator, PaginatorModule } from 'primeng/paginator';
import { PipesModule } from '../pipes/pipes.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { GalleriaModule } from 'primeng/galleria';
import { WishListComponent } from './wish-list/wish-list.component';
import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    ProductDetailsComponent,
    WishListComponent,
  ],
  imports: [
    CommonModule,
    ECommerceRoutingModule,
    CarouselModule,
    FormsModule,
    TableModule,
    PaginatorModule,
    ButtonModule,
    RatingModule,
    TagModule,
    FormsModule,
    HttpClientModule,
    PipesModule,
    GalleriaModule,
    CardModule,
  ],
})
export class ECommerceModule {}
