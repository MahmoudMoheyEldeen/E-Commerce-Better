import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'E-Commerce',
    pathMatch: 'full',
  },
  {
    path: 'E-Commerce',
    loadChildren: () =>
      import('./e-commerce/e-commerce.module').then((m) => m.ECommerceModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
