import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { OrdersComponent } from './orders/orders.component';
import { AuthGuard } from '../auth.guard';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'cart',
    component: CartComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'address/:id',
    component: AddressComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'productDetails/:id',
    component: ProductDetailsComponent,
    pathMatch: 'full',
  },
  {
    path: 'wishList',
    component: WishListComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'home/allorders',
    component: OrdersComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ECommerceRoutingModule {}
